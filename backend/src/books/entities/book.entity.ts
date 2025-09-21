import { ApiProperty } from '@nestjs/swagger';
import { Author } from 'src/authors/entities/author.entity';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

export class Book {
  @ApiProperty({ description: 'Book ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'Book title', example: 'The Great Gatsby' })
  title: string;

  @ApiProperty({ description: 'Book genre', example: 'Fiction' })
  genre: string;

  @ApiProperty({ description: 'Author ID', example: 1 })
  authorId: number;

  @ApiProperty({
    description: 'Book author',
    type: () => Author,
  })
  author?: Author;
}

export class BookPaginationResponse extends PaginatedResponseDto<Book> {
  @ApiProperty({ type: () => [Book] })
  declare items: Book[];
}
