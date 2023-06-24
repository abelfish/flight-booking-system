import { FlightRouteDTO } from '../../model/FlightRouteDTO';
import FlightSchedule from './FlightSchedule';

function FlightRoute(props: { flightRoute: FlightRouteDTO }) {
  const { flightScheduleDTOS: flightScheduleDTOS } = props.flightRoute;
  return (
    <div className="w-full flex flex-col">
      <div className="flex mx-auto border border-dashed rounded-lg p-4">
        <div className="mx-10 text-center">
          <h1 className="font-semibold text-xl">Flight Number</h1>
          <h1 className="text-lg">{props.flightRoute.flightNumber}</h1>
        </div>
        <div className="mx-10 text-center">
          <h1 className="font-semibold text-xl">Departure city</h1>
          <h1 className="text-lg">{props.flightRoute.departureCity}</h1>
        </div>
        <div className="mx-10 text-center">
          <h1 className="font-semibold text-xl">Arrival City</h1>
          <h1 className="text-lg">{props.flightRoute.arrivalCity}</h1>
        </div>
        <div className="mx-10 text-center">
          <h1 className="font-semibold text-xl">Departure Time</h1>
          <h1 className="text-lg">{props.flightRoute.departureTime}</h1>
        </div>
        <div className="mx-10 text-center">
          <h1 className="font-semibold text-xl">Arrival Time </h1>
          <h1 className="text-lg">{props.flightRoute.arrivalTime}</h1>
        </div>
      </div>
      <div className='mt-20'>
        <h1 className="font-semibold text-xl">Flight Schedules</h1>
      </div>
      {flightScheduleDTOS.map((flightScheduleDTO) => (
        <div>
          <FlightSchedule flightSchedule={flightScheduleDTO} />
        </div>
      ))}
    </div>
  );
}

export default FlightRoute;
