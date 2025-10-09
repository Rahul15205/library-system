import { Type } from "class-transformer";
import { IsDate, IsString } from "class-validator";

export class BorrowedBookDto {
    @IsString()
    userId : string;
    
    @IsString()
    bookId : string;

    @Type(() => Date)
    @IsDate()
    dueDate : Date;
}

export class ReturnBookDto {
    @IsString()
    borrowedBookId : string;
}
