import { FlightScheduleDTO } from './FlightScheduleDTO';

export interface FlightRouteDTO {
  id?: number | null;
  departureCity: string;
  arrivalCity: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  flightScheduleDTOS: FlightScheduleDTO[];
}
