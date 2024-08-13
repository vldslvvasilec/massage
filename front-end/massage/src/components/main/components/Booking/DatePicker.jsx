import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { useTranslation } from 'react-i18next';
import { French } from 'flatpickr/dist/l10n/fr';
import { English } from 'flatpickr/dist/l10n/default';
import './Booking.scss';

export default function DatePicker({ onDateChange }) {
    const [date, setDate] = useState(new Date());
    const { i18n } = useTranslation();
    const locale = i18n.resolvedLanguage === 'en' ? English : French;

    const roundToNearest30 = (date) => {
        const minutes = date.getMinutes();
        const roundedMinutes = minutes % 30 >= 15 ? minutes + (30 - minutes % 30) : minutes - minutes % 30;
        date.setMinutes(roundedMinutes);
        return date;
    };
    
    const handleDateChange = (selectedDates) => {
        const newDate = roundToNearest30(selectedDates[0]);
        setDate(newDate);
        if (onDateChange) {
            onDateChange(newDate);
        }
    };

    return (
        <div>
            <Flatpickr
                value={roundToNearest30(date)}
                onChange={handleDateChange}
                options={{
                    dateFormat: "Y-m-d H:i",
                    minDate: "today",
                    enableTime: true,
                    time_24hr: true,
                    minuteIncrement: 30,
                    inline: true,
                    altInput: true,
                    locale: locale,
                }}
                className='flatpickr-hiden-input'
            />
        </div>
    );
}
