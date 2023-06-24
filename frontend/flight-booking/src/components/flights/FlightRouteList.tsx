import { useEffect, useState } from 'react';
import { FlightRouteDTO } from '../../model/FlightRouteDTO';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FlightRouteList() {
  const [flights, setFlights] = useState<FlightRouteDTO[]>([]);

  const getFlights = async () => {
    const response = await axios.get<FlightRouteDTO[]>(
      'http://localhost:8080/api/flight-routes',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }
    );

    setFlights(response.data);
  };
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      window.location.href = '/login';
    }
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.role !== 'ADMIN') {
      alert('You are not authorized to view this page');
      window.location.href = '/';
    }
    getFlights();
  }, []);

  return (
    <div className="flex flex-col lg:mx-32  lg:w-4/5 mx-auto">
      <div>
        <h1 className="text-2xl my-20 font-bold">Flight Routes </h1>
      </div>

      <div className="self-end mr-20">
        <Link to="/add-flight-route">
          <button className=" hover:bg-gray-200  font-bold py-2 px-4 rounded my-10 border border-black">
            Add Flight Route
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {' '}
            <p className="text-gray-600">Click on a flight route to edit it</p>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Flight Number
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Departure City
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Arrival City
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Departure Time
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Arrival Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flight) => (
                  <tr
                    key={flight.id}
                    onClick={() =>
                      (window.location.href = '/edit-flight-route/' + flight.id)
                    }
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:cursor-pointer"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {flight.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {flight.flightNumber}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {flight.departureCity}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {flight.arrivalCity}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {flight.departureTime}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {flight.arrivalTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightRouteList;
