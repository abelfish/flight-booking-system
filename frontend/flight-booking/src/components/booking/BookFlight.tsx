import { useEffect, useState } from 'react';
import { FlightScheduleDTO } from '../../model/FlightScheduleDTO';
import FlightSchedule from '../flights/FlightSchedule';
import { BookingDTO } from '../../model/BookingDTO';
import axios from 'axios';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

function BookFlight() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [flightSchedule, setFlightSchedule] = useState<FlightScheduleDTO>();

  const generateBookingReference = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const onBookAFlightClicked = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bookingDTO: BookingDTO = {
      bookingDate: new Date(),
      bookingStatus: 'BOOKED',
      bookingReference: generateBookingReference(),
      passenger: {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: new Date(dateOfBirth),
        addressDTO: {
          street: street,
          city: city,
          state: state,
          zipCode: zipCode,
        },
        userDTO: {
          username: username,
          password: password,
          email: email,
          role: 'CUSTOMER ',
        },
      },
      totalPrice: flightSchedule!.basePrice * 1.08,
      flightScheduleDTO: flightSchedule,
    };

    if (email === '' || password === '' || username === '')
      bookingDTO.passenger.userDTO = null;
    console.log(bookingDTO);

    axios.post('http://localhost:8080/api/bookings', bookingDTO).then((res) => {
      alert('Booking Successful');
      window.location.href = '/bookings/' + res.data.bookingId;
    });
  };
  const getFlightSchedule = async () => {
    const id = window.location.href.split('/').pop();
    console.log(id);
    const response = await axios.get(
      'http://localhost:8080/api/flight-schedules/' + id
    );
    setFlightSchedule(response.data);
  };

  useEffect(() => {
    getFlightSchedule();
  }, []);

  return (
    <div className="mx-32">
      <form action="" onSubmit={onBookAFlightClicked}>
        <div className="my-20">
          <h1 className="text-2xl font-semibold">Book Flight</h1>
        </div>
        {flightSchedule && (
          <div className="my-10 border-gray-200 border bg-white rounded-lg p-4">
            <h2 className="font-semibold text-xl leading-7 text-gray-900">
              Flight Details
            </h2>

            <div className="flex flex-col basis-3/4">
              <div className="basis-3/4 flex flex-row">
                <div className="text-center basis-1/2 flex flex-col">
                  <h1 className="font-bold">
                    {flightSchedule.flightRouteDTO.departureTime}
                  </h1>
                  <h1 className="text-gray-500 font-semibold">
                    {flightSchedule.flightRouteDTO.departureCity}
                  </h1>
                  <h1 className="my-2">
                    {flightSchedule.departureDate.toString()}
                  </h1>
                </div>
                <div className="text-center basis-1/2 flex flex-col">
                  <h1 className="font-bold">
                    {flightSchedule.flightRouteDTO.arrivalTime}
                  </h1>
                  <h1 className="text-gray-500 font-semibold">
                    {flightSchedule.flightRouteDTO.arrivalCity}
                  </h1>
                  <h1 className="my-2">
                    {flightSchedule.departureDate.toString()}
                  </h1>
                </div>
              </div>
              <div>
                <ArrowRightIcon className="h-7 w-96 mx-auto" />
              </div>
            </div>
            <div className="basis-1/4 text-center ">
              <div>
                <h1 className="text-gray-500 font-semibold">
                  {flightSchedule.flightRouteDTO.flightNumber}
                </h1>

                <h1 className="mt-10 font-bold text-2xl">
                  <span className="text-lg text-gray-500 mr-2">Total</span>
                  ${(flightSchedule.basePrice * 1.08).toFixed(2)}
                </h1>
              </div>
            </div>
          </div>
        )}
        <div className="">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date of Birth
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button className='hover:bg-gray-300 rounded-lg border border-black px-6 py-2 mt-2' type="submit">
              Book Flight
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookFlight;
