import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface';

@Injectable()
export class TicketsService {
   private readonly tickets: Ticket[] = [
        { 
            id: 1, subject: 'Issue with login', 
            description: 'Cannot log in to the system', 
            priority: 'high', 
            status: 'open', 
            createdAt: new Date().toISOString() 
        },
        { 
            id: 2, 
            subject: 'Feature request', 
            description: 'Add dark mode', 
            priority: 'medium', 
            status: 'open', 
            createdAt: new Date().toISOString() 
        },
        { 
            id: 3, 
            subject: 'Bug in dashboard', 
            description: 'Dashboard not loading properly', 
            priority: 'high', 
            status: 'closed', 
            createdAt: new Date().toISOString() 
        },
    ];

    // returns all tickets
    // findAll() {
    //     return this.tickets;
    // }


    // returns all tickets with optional filtering by status and priority
    findAll(status?: Ticket['status'], priority?: Ticket['priority']) {
        let filteredTickets = this.tickets;
        if (status) {
            filteredTickets = filteredTickets.filter(ticket => ticket.status === status);
        }
        if (priority) {
            filteredTickets = filteredTickets.filter(ticket => ticket.priority === priority);
        }
        return filteredTickets;
    }

    // returns a single ticket by id, throws NotFoundException if not found
    findOne(id: number) {
        const ticket = this.tickets.find(ticket => ticket.id === id);
        if (!ticket) {
            throw new NotFoundException(`Ticket with id ${id} not found`);
        }
        return ticket;
    }
}    
