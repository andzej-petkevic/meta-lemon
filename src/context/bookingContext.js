import {createContext, useContext, useState} from "react";

const BookingContext = createContext(undefined);

export const BookingProvider = ({children}) => {
    const [state] = useState({
        bookings: {}
    });

    return (
        <BookingContext.Provider
            value={{
                ...state,
                addBooking: (booking) => {
                    if (!state.bookings[booking.date]) {
                        state.bookings[booking.date] = {};
                    }
                    state.bookings[booking.date][booking.time] = {
                        guests: booking.numberOfGuests,
                        occasion: booking.occasion
                    }
                }
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export const useBookingContext = () => useContext(BookingContext);
