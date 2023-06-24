import { useEffect, useState } from 'react';
import { BookingDTO } from '../../model/BookingDTO';
import { FlightScheduleDTO } from '../../model/FlightScheduleDTO';
import axios from 'axios';

function EditBooking() {
  const [booking, setBooking] = useState<BookingDTO>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [flightSchedule, setFlightSchedule] = useState<FlightScheduleDTO>();

  const onUpdateBookingClicked = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    booking?.passenger.addressDTO &&
      (booking.passenger.addressDTO.street = street);
    booking?.passenger.addressDTO && (booking.passenger.addressDTO.city = city);
    booking?.passenger.addressDTO &&
      (booking.passenger.addressDTO.state = state);
    booking?.passenger.addressDTO &&
      (booking.passenger.addressDTO.zipCode = zipCode);
    booking?.passenger.userDTO && (booking.passenger.userDTO.email = email);

    axios
      .put('http://localhost:8080/api/bookings/' + booking?.id, booking)
      .then((res) => {
        alert('Booking Update Successful');
        window.location.href = '/bookings/' + res.data.id;
      });
  };
  const getFlightBooking = async () => {
    const id = window.location.href.split('/').pop();
    console.log(id);
    const response = await axios.get(
      'http://localhost:8080/api/bookings/' + id
    );
    const bookingData: BookingDTO = response.data;

    console.log(bookingData);
    setBooking(bookingData);
    setFirstName(bookingData.passenger.firstName);
    setLastName(bookingData.passenger.lastName);
    bookingData.passenger.userDTO &&
      setEmail(bookingData.passenger.userDTO.email);
    setDateOfBirth(bookingData.passenger.dateOfBirth);
    setStreet(bookingData.passenger.addressDTO.street);
    setCity(bookingData.passenger.addressDTO.city);
    setState(bookingData.passenger.addressDTO.state);
    setZipCode(bookingData.passenger.addressDTO.zipCode);
    bookingData.passenger.userDTO &&
      setPassword(bookingData.passenger.userDTO.password);
    bookingData.passenger.userDTO &&
      setUsername(bookingData.passenger.userDTO.username);
    setFlightSchedule(bookingData.flightScheduleDTO);

    console.log(firstName);
  };
  useEffect(() => {
    getFlightBooking();
  }, []);

  return (
    <div>
      <div className="mx-32">
        <form action="" onSubmit={onUpdateBookingClicked}>
          <div className="my-20">
            <h1 className="text-2xl font-semibold">Edit Flight Details</h1>
          </div>
          {flightSchedule && (
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Flight Details
              </h2>
              <div className="my-10">
                <div className="flex rounded shadow-lg">
                  <div className="mx-10">
                    <h1>Departure Date</h1>
                    <h1>{flightSchedule.departureDate.toString()}</h1>
                  </div>
                  <div>
                    <h1>Price</h1>
                    <h1>{flightSchedule.basePrice}</h1>
                  </div>
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
                      disabled
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      disabled
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      disabled
                      required
                      value={dateOfBirth.toString()}
                      onChange={(e) => setDateOfBirth(new Date(e.target.value))}
                      type="date"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2">
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="border border-black py-2 px-6 rounded-md mt-2 hover:bg-gray-300"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBooking;
