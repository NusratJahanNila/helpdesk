import { IsIn, IsOptional } from "class-validator";

export class FilterTicketsQueryDto {
   @IsOptional()  // This decorator indicates that the property is optional
   @IsIn(['open', 'closed'])
   status?: 'open' | 'closed';

   @IsOptional()
   @IsIn(['low', 'medium', 'high'])
   priority?: 'low' | 'medium' | 'high';
}
