import { Controller,Get, Param, ParseIntPipe, Post, Query, Body } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { FilterTicketsQueryDto } from './dto/filter-tickets-query.dto';

@Controller('tickets') // Define the route prefix for this controller

export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) {}

    //retrive all tickets
    // @Get()
    // findAll(){
    //     return this.ticketsService.findAll();
    // }


    @Get()
    findAll(@Query() filters: FilterTicketsQueryDto) {
        return this.ticketsService.findAll(filters.status, filters.priority);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.ticketsService.findOne(id);
    }

    @Post()
    create(@Body() createTicketDto: CreateTicketDto) {
        return this.ticketsService.create(createTicketDto);
    }
}


