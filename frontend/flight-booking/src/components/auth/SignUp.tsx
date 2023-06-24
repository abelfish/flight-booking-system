import axios from 'axios';
import { useState } from 'react';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const onSignUpClicked = async (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post(
        'http://localhost:8080/api/users',
        {
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
          username: username,
          password: password,
          email: email,
          street: street,
          city: city,
          state: state,
          zipCode: zipCode,
          role:"CUSTOMER"
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then(async (response) => {
        alert('Sign up successful!');
        window.location.href = '/login';
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <div className=" p-6 flex m-auto w-full h-full">
        <div className="container mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Sign up Form
            </h2>
            <p className="text-gray-500 mb-6"></p>
            <form onSubmit={onSignUpClicked}>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-2">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                          required
                          type="date"
                          name="dateOfBirth"
                          id="dateOfBirth"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="email@domain.com"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="address">Address / Street</label>
                        <input
                          required
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="state">State / province</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="state"
                            id="state"
                            placeholder="State"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                          />
                          <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                            <svg
                              className="w-4 h-4 mx-2 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                            <svg
                              className="w-4 h-4 mx-2 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
