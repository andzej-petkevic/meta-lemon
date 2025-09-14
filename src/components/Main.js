import {Route, Routes} from "react-router";
import HomePage from "../pages/HomePage";
import BookingPage from "../feature/booking/BookingPage";
import {useState} from "react";

const Main = () => {
    const [bookingInfo, setBookingInfo] = useState({
        date: "",
        time: "",
        guests: 0,
        occasion: ""
    });

    const handleBookingSave = (event) => {
        console.log(event);
    }

    return(
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/booking" element={<BookingPage bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} saveBooking={handleBookingSave}/>}/>
            </Routes>
        </main>
    )
}

export default Main;