import React from "react";
import { useTranslation } from 'react-i18next';
import BookingAbout from "./components/Booking/BookingAbout";
import BookingForm from "./components/Booking/BookingForm";

const Booking = ({ marginTop }) => {
    const { t } = useTranslation();
    return (
        <div className="booking" style={{ marginTop: `${marginTop+20}px` }}>
            <BookingAbout />
            <BookingForm />
        </div>
    );
};

export default Booking;