import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function EditFlightRoute() {
    const { id } = useParams();

    const [flightNumber, setFlightNumber] =useState("");
    const [departureCity, setDepartureCity] =useState("");
    const [departureTime, setDepartureTime] =useState("");
    const [arrivalCity, setArrivalCity] =useState("");
    const [arrivalTime, setArrivalTime] =useState("");
    const [flightScheduleDTOS, setFlightScheduleDTOs] =useState([]);

    const getFlightRoute = async () => {
        await axios.get(`http://localhost:8080/api/flight-routes/${id}`).then((response) => {
            setFlightNumber(response.data.flightNumber);
            setDepartureCity(response.data.departureCity);
            setDepartureTime(response.data.departureTime);
            setArrivalCity(response.data.arrivalCity);
            setArrivalTime(response.data.arrivalTime);
            setFlightScheduleDTOs(response.data.flightScheduleDTOs);
        }).catch((error) => {
            alert(error.response.data.message);
        });
    }
    useEffect(() => {
        getFlightRoute();
    }, []);


    const onEditFlightRouteClicked = async (e: React.FormEvent) => {
        e.preventDefault();
        const flightRoute = {
            id: id,
            flightNumber: flightNumber,
            departureCity: departureCity,
            departureTime: departureTime,
            arrivalCity: arrivalCity,
            arrivalTime: arrivalTime,
            flightScheduleDTOS: flightScheduleDTOS
        };
        await axios.put("http://localhost:8080/api/flight-routes/"+ id, flightRoute).then(() => {
            alert("Flight Route Updated Successfully");
            window.location.href="/manage-flight-routes";
        }).catch((error) => {
            alert(error.response.data.message);
        });
    }


  
    return (
        <div className="md:mx-32 lg:w-3/5 lg:mx-auto ">
          <form onSubmit={onEditFlightRouteClicked}>
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
                        autoComplete="given-name"
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
                        autoComplete="family-name"
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
                        autoComplete="given-name"
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
                        autoComplete="arrival-city"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                      />
                    </div>
                  </div>
    
                 
                </div>
              </div>
              <div className="flex self-end">
                <button className="rounded-md border border-black hover:bg-gray-300 px-6 py-2 my-10" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }


export default EditFlightRoute