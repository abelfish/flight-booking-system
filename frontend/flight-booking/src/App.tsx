import { Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import SearchFlight from './components/flights/SearchFlight';
import BookFlight from './components/booking/BookFlight';
import ViewBooking from './components/booking/ViewBooking';
import EditBooking from './components/booking/EditBooking';
import SearchBooking from './components/booking/SearchBooking';
import CheckFlightStatus from './components/flights/CheckFlightStatus';
import FlightRouteList from './components/flights/FlightRouteList';
import AddFlightRoute from './components/flights/AddFlightRoute';
import EditFlightRoute from './components/flights/EditFlightRoute';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';
import Aboutus from './components/Aboutus';
import Users from './components/auth/Users';


function App() {
  
  return (
    <>
      <div className=" ">
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchFlight />} />
          <Route path="/search-flight" element={<SearchFlight />} />
          <Route path="/book-flight/:id" element={<BookFlight />} />
          <Route path="/bookings/:id" element={<ViewBooking />} />
          <Route path="/edit-booking/:id" element={<EditBooking />} />
          <Route path="/search-booking" element={<SearchBooking />} />
          <Route path="/flight-status" element={<CheckFlightStatus />} />
          <Route path="/manage-flight-routes" element={<FlightRouteList />} />
          <Route path="/add-flight-route" element={<AddFlightRoute />} />
          <Route path="/edit-flight-route/:id" element={<EditFlightRoute />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<h1 className='m-72 text-2xl font-bold'> 404 - Not Found</h1>} />

     
        </Routes>
      </div>
    </>
  );
}

export default App;
