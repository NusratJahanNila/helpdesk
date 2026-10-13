import { CanActivate, ExecutionContext, Injectable ,ForbiddenException} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()

// ExecutionContext: an object that provides details about the current request being processed, including the request and response objects, the handler function, and other metadata.

 
export class StaffGuard implements CanActivate {
  canActivate(context: ExecutionContext):boolean{
      const request = context.switchToHttp().getRequest();  // Get the request object from the execution context
      const staffKey = request.headers['x-staff-key']; // Retrieve the staff key from the request headers
    if (staffKey!=='helpdesk-staff-secret') {
      throw new ForbiddenException('Access denied: Staff access only');
    }

    return true;
  }
}
