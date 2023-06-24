import { Link } from 'react-router-dom';
import { FlightScheduleDTO } from '../../model/FlightScheduleDTO';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

function FlightSchedule(props: { flightSchedule: FlightScheduleDTO }) {
  const { flightSchedule } = props;
  return (
    <div className=" flex flex-row w-full h-36 border-t p-4 my-5 rounded-lg shadow-lg">
      <div className="flex flex-col basis-3/4">
        <div className="basis-3/4 flex flex-row">
          <div className="text-center basis-2/5 flex flex-col">
            <h1 className="font-bold">
              {flightSchedule.flightRouteDTO.departureTime}
            </h1>
            <h1 className="text-gray-500 font-semibold">
              {flightSchedule.flightRouteDTO.departureCity}
            </h1>
            <h1 className="my-2">{flightSchedule.departureDate.toString()}</h1>
          </div>
          <div className='basis-1/5'>
            <ArrowRightIcon className="h-7 mt-6 mx-auto" />
          </div>
          <div className="text-center basis-2/5 flex flex-col">
            <h1 className="font-bold">
              {flightSchedule.flightRouteDTO.arrivalTime}
            </h1>
            <h1 className="text-gray-500 font-semibold">
              {flightSchedule.flightRouteDTO.arrivalCity}
            </h1>
            <h1 className="my-2">{flightSchedule.departureDate.toString()}</h1>
          </div>
        </div>
      </div>
      <div className="basis-1/4 text-center ">
        <div>
          <h1 className="text-gray-500 font-semibold">
            {flightSchedule.flightRouteDTO.flightNumber}
          </h1>

          <h1 className="mt-10 font-bold text-2xl">
            <span className="text-sm text-gray-500 mr-2">Base Price</span>$
            {(flightSchedule.basePrice)}
          </h1>
        </div>
      </div>
      <div className=" basis-1/4 m-10 self-end">
        <button>
          <Link
            to={'/book-flight/' + flightSchedule.id}
            className="shadow-lg text-white bg-black hover:bg-gray-800 font-semibold py-2 px-4 rounded-2xl"
          >
            Select Flight
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FlightSchedule;
