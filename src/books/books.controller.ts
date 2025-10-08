import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService : BooksService){}

    @Post()
    create(@Body() createBookDto : CreateBookDto) {
        return this.booksService.create(createBookDto);
    }
}
