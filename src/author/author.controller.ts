import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService : AuthorService){}
    @Post()
    create(@Body() createAuthorDto : CreateAuthorDto){
        return this.authorService.create(createAuthorDto);
    }

    @Get()
    findAll() {
        return this.authorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.authorService.findOne(id);
    }

    @Patch(':id')
    updateOne(@Param('id') id:string, @Body() updateAuthorDto : UpdateAuthorDto){
        return this.authorService.update(id, updateAuthorDto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string){
        return this.authorService.remove(id);
    }
}
