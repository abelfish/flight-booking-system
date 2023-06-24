import { useState } from 'react';
import axios from 'axios';
import { FlightScheduleDTO } from '../../model/FlightScheduleDTO';
import FlightSchedule from './FlightSchedule';

function SearchFlight() {
  const [departureCity, setDepartureCity] = useState<string>('');
  const [arrivalCity, setArrivalCity] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<string | null>(null);
  const [flightSchedules, setFlightSchedules] = useState<FlightScheduleDTO[]>(
    []
  );
  const [responseData, setResponseData] = useState();

  const onSubmitSearchFlight = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .get('http://localhost:8080/api/flight-schedules/search', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        params: {
          departureCity: departureCity,
          arrivalCity: arrivalCity,
          departureDate: departureDate,
        },
      })
      .then((response) => {
        if (response.data.content.length === 0) {
          alert('No Flight Routes Found');
          return;
        }
        console.log(response.data);
        setFlightSchedules(response.data.content);
        setResponseData(response.data);

        window.location.href = '#results';
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="w-1/2 mx-auto px-32  mt-20 flex-col flex">
        <div className="my-10 ">
          <h1 className="text-2xl">Search Flight</h1>
        </div>
        <div>
          <form onSubmit={onSubmitSearchFlight}>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Flight Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600"></p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="departure-city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Departure City
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      type="text"
                      name="departure-city"
                      id="departure-city"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="arrival-city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Arrival City
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      type="text"
                      value={arrivalCity}
                      onChange={(e) => setArrivalCity(e.target.value)}
                      name="arrival-city"
                      id="arrival-city"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="departure-date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Departure Date
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="MM/DD/YYYY"
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      name="departure-date"
                      id="departure-date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-b border-gray-900/10 pb-8 r-0">
              <div className="">
                <button
                  type="submit"
                  className="mr-0 px-10 py-3 rounded-lg hover:bg-gray-200 border border-black"
                >
                  Search{' '}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div id="results" className="mt-20 ">
          {flightSchedules.length != 0 && (
            <div className="my-10 w-full row-auto">
              <h1 className="text-2xl font-bold">Search Results</h1>
            </div>
          )}

          <div className="w-full">
            {flightSchedules &&
              flightSchedules.map((flight) => (
                <FlightSchedule key={flight.id} flightSchedule={flight} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchFlight;
