import { Controller,Get, Param, ParseIntPipe, Post, Query, Body, Patch, UseGuards } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { FilterTicketsQueryDto } from './dto/filter-tickets-query.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { StaffGuard } from './guards/staff.guard';

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

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateTicketDto: UpdateTicketDto
    ) {
        return this.ticketsService.update(id, updateTicketDto);
    }

    // to use the staff key
    @UseGuards(StaffGuard)
    // Close a ticket by id
    @Patch(':id/close')
    closeTicket(@Param('id', ParseIntPipe) id: number) {
        return this.ticketsService.closeTicket(id);
    }

}
