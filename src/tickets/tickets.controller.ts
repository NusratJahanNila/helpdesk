import { Controller,Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.interface';

@Controller('tickets') // Define the route prefix for this controller

export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) {}

    //retrive all tickets
    // @Get()
    // findAll(){
    //     return this.ticketsService.findAll();
    // }


    @Get()
    findAll(@Query('status') status?: Ticket['status'], @Query('priority') priority?: Ticket['priority']) {
        return this.ticketsService.findAll(status, priority);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.ticketsService.findOne(id);
    }
}


