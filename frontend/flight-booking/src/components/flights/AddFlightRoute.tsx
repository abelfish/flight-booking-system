import { useState } from 'react';
import { FlightRouteDTO } from '../../model/FlightRouteDTO';

import axios from 'axios';

function AddFlightRoute() {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [flightNumber, setFlightNumber] = useState('');

  const onAddFlightRouteClicked = async (e: React.FormEvent) => {
    e.preventDefault();
    const flightRoute: FlightRouteDTO = {
      id: null,
      departureCity: departureCity,
      arrivalCity: arrivalCity,
      departureTime: departureTime,
      arrivalTime: arrivalTime,
      flightNumber: flightNumber,
      flightScheduleDTOS: [],
    };
    await axios
      .post('http://localhost:8080/api/flight-routes', flightRoute)
      .then(() => {
        alert('Flight Route Added Successfully');
        window.location.href = '/manage-flight-routes';
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="md:mx-32 lg:w-2/5 lg:mx-auto ">
      <form onSubmit={onAddFlightRouteClicked}>
        <div className="my-20">
          <h1 className="text-2xl font-semibold">Add Flight Route</h1>
        </div>

        <div className="flex flex-col">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Flight Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600"></p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="flight-number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Flight Number
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    type="text"
                    name="flight-number"
                    id="flight-number"

                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="departure-city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Departure City
                </label>
                <div className="mt-2">
                  <input
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    required
                    type="text"
                    name="departure-city"
                    id="departure-city"
                
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="departureTime"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Departure Time
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                    type="time"
                    name="departureTime"
                    id="departureTime"
                
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="arrival-city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Arrival City
                </label>
                <div className="mt-2">
                  <input
                    value={arrivalCity}
                    onChange={(e) => setArrivalCity(e.target.value)}
                    required
                    type="text"
                    name="arrival-city"
                    id="arrival-city"
                 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="col-span-3 ">
                <label
                  htmlFor="arrivalTime"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Arrival Time
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                    type="time"
                    name="arrivalTime"
                    id="arrivalTime"
               
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex self-end">
            <button
              className="rounded-md border border-black hover:bg-gray-300 px-6 py-2 my-10"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddFlightRoute;
