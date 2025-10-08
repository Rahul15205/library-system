import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './book.dto';

@Injectable()
export class BooksService {
    constructor(private prisma : PrismaService){}
    async create(createBookDto : CreateBookDto) {
        const { title, isbn, description, publishedAt, genre, authorId } = createBookDto;

        const existingBook = await this.prisma.book.findUnique({
            where : {isbn},
        });

        if(existingBook) {
            throw new ConflictException('Book with this ISBN already exists');
        }

        const author = await this.prisma.author.findUnique({
            where : { id: authorId },
        })

        if(!author) {
            throw new NotFoundException('Author not found');
        }

        const book = await this.prisma.book.create({
            data: {
                title,
                isbn,
                description,
                publishedAt : publishedAt ? new Date(publishedAt) : null,
                genre,
                authorId,
            },
            include : {
                author : {
                    select : {
                        id : true,
                        name : true,
                        nationality : true,
                    },
                },
            },
        });
        return book;
    }

    async findAll(){
        
    }
}
