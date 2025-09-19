import { IsString, IsInt, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'Book title',
    maxLength: 255,
    example: 'The Great Gatsby',
  })
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    description: 'Book genre',
    maxLength: 100,
    example: 'Fiction',
  })
  @IsString()
  @MaxLength(100)
  genre: string;

  @ApiProperty({
    description: 'Author ID',
    example: 1,
  })
  @IsInt()
  authorId: number;
}
