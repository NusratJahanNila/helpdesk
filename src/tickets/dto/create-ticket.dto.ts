import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateTicketDto {
    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?: string;

    @IsOptional()
    @IsIn(['low', 'medium', 'high'])
    priority?: 'low' | 'medium' | 'high';
}
