import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthorService } from './author/author.service';
import { AuthorController } from './author/author.controller';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [BooksModule, AuthorModule],
  controllers: [AppController, AuthorController],
  providers: [AppService, PrismaService, AuthorService],
})
export class AppModule {}
