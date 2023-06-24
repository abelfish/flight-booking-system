import { FlightRouteDTO } from './FlightRouteDTO';

export interface FlightScheduleDTO {
  id?: number;
  departureDate: Date;
  availableSeats: number;
  maximumSeats: number;
  basePrice: number;
  flightRouteDTO: FlightRouteDTO;
}
