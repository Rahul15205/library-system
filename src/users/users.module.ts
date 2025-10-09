import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
    controllers : [UsersController],
    providers : [ConfigService, UsersService, PrismaService],
    exports : [UsersService]
})
export class UsersModule {}
