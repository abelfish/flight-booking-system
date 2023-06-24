import axios from 'axios';
import { useState } from 'react';

export default function SearchBooking() {
  const [bookingReference, setBookingReference] = useState('');

  const onSearchBookingClicked = () => {
    axios
      .get('http://localhost:8080/api/bookings/search', {
        params: {
          bookingReference: bookingReference,
        },
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = '/bookings/' + response.data.id;
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="mx-auto mt-32 w-7/12">
      <div className="w-1/2 mx-auto">
        <div className="my-10">
          <h1 className="text-3xl font-semibold my-2">Search Booking</h1>
          <div className=' text-gray-500'>
            Please input your booking reference to view and manage your booking details.
          </div>
        </div>
        <label
          htmlFor="bookingReference"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Booking Reference
        </label>
        <div className="relative mt-2 rounded-md shadow-sm flex ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            value={bookingReference}
            onChange={(e) => setBookingReference(e.target.value)}
            type="text"
            name="bookingReference"
            id="bookingReference"
            className="block w-3/5 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          />
          <button
            onClick={onSearchBookingClicked}
            className="border border-black rounded-md px-4 ml-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
