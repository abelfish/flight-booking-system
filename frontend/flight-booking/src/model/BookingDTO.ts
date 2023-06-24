import { CustomerDTO } from "./CustomerDTO";
import { FlightScheduleDTO } from "./FlightScheduleDTO";

export interface BookingDTO {
    id?: number;
    bookingReference: string;
    bookingDate: Date;
    totalPrice: number;
    bookingStatus: string;
    flightScheduleDTO?: FlightScheduleDTO;
    passenger: CustomerDTO;



}
