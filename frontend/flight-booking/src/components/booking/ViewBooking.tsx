import React from 'react';
import { BookingDTO } from '../../model/BookingDTO';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewBooking() {
  const [booking, setBooking] = React.useState<BookingDTO>();

  const cancelBooking = () => {
    if (booking?.bookingStatus === 'CONFIRMED')
      alert('Booking already Confirmed');
    if (booking?.bookingStatus === 'CANCELLED')
      alert('Booking already Cancelled');
    else {
      booking!.bookingStatus = 'CANCELLED';
      axios
        .put('http://localhost:8080/api/bookings/' + booking?.id, booking)
        .then((response) => {
          console.log(response.data);
          setBooking(response.data);
          alert('Booking successfully Cancelled');
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  React.useEffect(() => {
    axios
      .get<BookingDTO>(
        'http://localhost:8080/api/bookings/' +
          window.location.href.split('/').pop()
      )
      .then((response) => {
        console.log(response.data);
        setBooking(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="mx-auto w-4/5 px-32  mt-20">
      <div>
        <div className="px-4 sm:px-0">
          <h3 className=" font-semibold leading-7 text-gray-900 text-2xl">
            Flight Itinerary
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Booking details and Passenger Information.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Booking Reference
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {booking?.bookingReference}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Booking Status
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {booking?.bookingStatus}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Booking Date
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {booking?.bookingDate.toString().split('T')[0]}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Departure
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  From -{' '}
                  {booking?.flightScheduleDTO?.flightRouteDTO.departureCity}
                </p>
                <p>
                  Date -{' '}
                  {
                    booking?.flightScheduleDTO?.departureDate
                      .toString()
                      .split('T')[0]
                  }
                </p>
                <p>
                  Time -{' '}
                  {booking?.flightScheduleDTO?.flightRouteDTO.departureTime}
                </p>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Arrival
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  To - {booking?.flightScheduleDTO?.flightRouteDTO.arrivalCity}
                </p>
                <p>
                  Date -{' '}
                  {
                    booking?.flightScheduleDTO?.departureDate
                      .toString()
                      .split('T')[0]
                  }
                </p>
                <p>
                  Time -{' '}
                  {booking?.flightScheduleDTO?.flightRouteDTO.arrivalTime}
                </p>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Passenger Information
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  Name -{' '}
                  {booking?.passenger.firstName +
                    ' ' +
                    booking?.passenger.lastName}
                </p>
                <p>
                  Date of Birth -{' '}
                  {booking?.passenger.dateOfBirth.toString().split('T')[0]}
                </p>
                <p>
                  Address -{' '}
                  {booking?.passenger.addressDTO.street +
                    ', ' +
                    booking?.passenger.addressDTO.city +
                    ', ' +
                    booking?.passenger.addressDTO.state +
                    ', ' +
                    booking?.passenger.addressDTO.zipCode}
                </p>
                {booking?.passenger.userDTO && (
                  <p>Email - {booking?.passenger.userDTO.email} </p>
                )}
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-20">
          <Link
            to={'/edit-booking/' + booking?.id}
            className=" rounded-md border border-black px-4 py-2  hover:bg-slate-200"
          >
            Edit Booking
          </Link>
          <button
            onClick={cancelBooking}
            className="ml-4 rounded-md border border-black px-4 h-10 hover:bg-slate-200"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewBooking;
