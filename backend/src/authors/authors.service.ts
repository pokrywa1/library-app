import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAuthorDto: CreateAuthorDto) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(id: number) {
    return this.prisma.author.findUnique({
      where: { id: id },
      include: { books: true },
    });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.prisma.author.update({
      data: updateAuthorDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.author.delete({
      where: { id: id },
    });
  }
}
