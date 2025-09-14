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


    return(
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/booking" element={<BookingPage />}/>
            </Routes>
        </main>
    )
}

export default Main;