import {Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, Select} from "@chakra-ui/react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useBookingContext} from "../../context/bookingContext";
import {useEffect, useState} from "react";



const FormField = ({label, error, isInvalid, children}) => (
    <FormControl isInvalid={isInvalid}>
        <FormLabel aria-label={label}>{label}</FormLabel>
        {children}
        <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
);

const BookingForm = () => {
    const timeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const occasions = ["Regular", "Birthday", "Anniversary"];
    const validationSchema = Yup.object({
        date: Yup.string().required(),
        time: Yup.string().required(),
        numberOfGuests: Yup.number()
            .min(1)
            .max(10)
            .required(),
        occasion: Yup.string().required(),
    });

    const findMinDate = (date) => {
        const dateString = date.toISOString().split('T')[0];
        if (!bookings[dateString]) {
            return dateString;
        }
        const times = Object.keys(bookings[dateString]);
        if (times.length !== timeSlots.length) {
            return dateString;
        }
        const result = date;
        result.setDate(result.getDate() + 1);
        return findMinDate(result, bookings);
    }

    const findAvailableTimes = (date) => {
        return timeSlots.filter(time => !bookings[date]?.[time]);
    }

    const {addBooking, bookings} = useBookingContext();
    const [minDate, setMinDate] = useState(findMinDate(new Date()));
    const [availableTimes, setAvailableTimes]= useState(findAvailableTimes(new Date(minDate)));
    const formik = useFormik({
        initialValues: {
            time: availableTimes[0],
            date: minDate,
            numberOfGuests: 1,
            occasion: occasions[0]
        },
        onSubmit: (values) => {
            if (formik.isValid) {
                addBooking(values);
                const minDate = findMinDate(new Date(values.date));
                setMinDate(minDate);
                setAvailableTimes(findAvailableTimes(minDate));
            }
        },
        validationSchema,
        enableReinitialize: true
    });



    return (
        <form className="booking-form" onSubmit={formik.handleSubmit} aria-label={"Booking form"}>
            <HStack spacing={4}>
                <FormField
                    label="Choose date"
                    error={formik.errors.date}
                    isInvalid={formik.touched.date && formik.errors.date}
                >
                    <Input id="date" type="date" {...formik.getFieldProps('date')} min={minDate}/>
                </FormField>

                <FormField
                    label="Choose time"
                    error={formik.errors.time}
                    isInvalid={formik.touched.time && formik.errors.time}
                >
                    <Select {...formik.getFieldProps('time')}>
                        {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                    </Select>
                </FormField>

                <FormField
                    label="Number of guests"
                    error={formik.errors.numberOfGuests}
                    isInvalid={formik.touched.numberOfGuests && formik.errors.numberOfGuests}
                >
                    <Input type="number" placeholder="1" {...formik.getFieldProps('numberOfGuests')}/>
                </FormField>

                <FormField
                    label="Occasion"
                    error={formik.errors.occasion}
                    isInvalid={formik.touched.occasion && formik.errors.occasion}
                >
                    <Select {...formik.getFieldProps('occasion')}>
                        {occasions.map(occasion => <option key={occasion} value={occasion}>{occasion}</option>)}
                    </Select>
                </FormField>
            </HStack>
            <Button type="submit">Make Your reservation</Button>
            <div>{JSON.stringify(formik.getFieldProps('date'))}</div>
        </form>
    )
}

export default BookingForm;

