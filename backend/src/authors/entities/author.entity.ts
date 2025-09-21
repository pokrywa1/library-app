import { ApiProperty } from '@nestjs/swagger';
import { Book } from 'src/books/entities/book.entity';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

export class Author {
  @ApiProperty({ description: 'Author ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'Author name', example: 'John Doe' })
  name: string;

  @ApiProperty({ description: 'Author email', example: 'john@example.com' })
  email: string;

  @ApiProperty({
    description: 'Books written by the author',
    type: () => [Book],
  })
  books?: Book[];
}

export class AuthorPaginationResponse extends PaginatedResponseDto<Author> {
  @ApiProperty({ type: () => [Author] })
  declare items: Author[];
}
