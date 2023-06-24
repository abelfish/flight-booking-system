import axios from 'axios';
import { useState } from 'react';

export default function SearchBooking() {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightStatus, setFlightStatus] = useState('');

  const onCheckFlightStatusClicked = () => {
    if (flightNumber === '') {
      alert('Please enter flight number');
      setFlightStatus('');
      return;
    }
    axios
      .get('http://localhost:8080/api/flight-routes/status', {
        params: {
          flightNumber: flightNumber,
        },
      })
      .then((response) => {
        console.log(response.data);
        setFlightStatus(response.data.status);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="mt-32 mx-auto w-7/12">
      <div className="w-1/2 mx-auto">
        <div className="my-10">
          <h1 className="text-3xl font-semibold my-2">Check Flight Status</h1>
          <div className=" text-gray-500"></div>
        </div>
        <label
          htmlFor="checkFlightStatus"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Input Flight Number
        </label>
        <div className="relative mt-2 rounded-md shadow-sm flex">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
          required
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            type="text"
            name="checkFlightStatus"
            id="checkFlightStatus"
            className="block w-3/5 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          />
          <button
            onClick={onCheckFlightStatusClicked}
            className="border border-black rounded-md px-4 ml-2 hover:bg-slate-300"
          >
            Check
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        {flightStatus && (
          <div className="my-10">
            <h1 className="text-3xl font-semibold my-2">Flight Status</h1>
            <div className=" text-gray-500">{flightStatus}</div>
          </div>
        )}
      </div>
    </div>
  );
}
