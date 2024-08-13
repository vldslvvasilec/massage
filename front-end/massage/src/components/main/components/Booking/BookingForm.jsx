import React, { useState } from 'react';
import DatePicker from './DatePicker';
import { useTranslation } from 'react-i18next';
import './Booking.scss';
import ScrollTransform from '../../ScrollTransform';

export default function ParentComponent() {
    const { t, i18n } = useTranslation();
    const [selectedDate, setSelectedDate] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [formState, setFormState] = useState('form'); // 'form', 'thank-you', 'reset'
    const [reservationDetails, setReservationDetails] = useState({ name: '', date: '' });
    const bookingBgText = t('booking-bg-text');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setEmailError('');
        } else {
            setEmailError(t('invalidEmail'));
        }
    };

    const isFormValid = () => {
        return selectedDate !== null && name.trim() !== '' && email.trim() !== '' && emailError === '';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            const locale = i18n.language;
            const formattedDate = new Intl.DateTimeFormat(locale, {
                dateStyle: 'full',
                timeStyle: 'short'
            }).format(selectedDate);

            setReservationDetails({ name, date: formattedDate });

            setFormState('thank-you');
            setTimeout(() => {
                setFormState('reset');
                setReservationDetails({ name: '', date: '' });
            }, 5000); // 5 seconds for thank-you message display

            // Reset form fields after the thank-you message
            setTimeout(() => {
                setName('');
                setEmail('');
                setEmailError('');
                setSelectedDate(null);
            }, 5500); // 5000ms thank-you message display + 500ms for reset
        }
    };

    return (
        <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
        <div className="form-container">
            {formState === 'form' && (
                <form onSubmit={handleSubmit} className="form reservation-form" style={{ '--booking-tittle-bg-text': `"${bookingBgText}"` }}>
                    <h2 className='reservation-form-tittle'>{t('bookingForm')}</h2>
                    <section className="reservation-form-wrap">
                        <section className="reservation-form-details">
                            <section className='reservation-form-name'>
                                <label htmlFor="name">{t('nameLabel')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder={t('namePlaceholder')}
                                />
                            </section>
                            <section className='reservation-form-email'>
                                <label htmlFor="email">{t('emailLabel')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={emailError ? 'input-error' : ''}
                                    placeholder={t('emailPlaceholder')}
                                />
                        </section>
                    </section>
                    <section className='reservation-form-calendar'>
                        <DatePicker onDateChange={handleDateChange} />
                    </section>
                    </section>
                    <button type="submit" disabled={!isFormValid()}>
                        {t('submitButton')}
                    </button>
                </form>
            )}
            {formState === 'thank-you' && (
                <div className="thank-you-message">
                    <h1>{t('thankYouMessage', { name: reservationDetails.name })}</h1>
                    <p>{t('reservationMessage', { date: reservationDetails.date })}</p>
                </div>
            )}
            {formState === 'reset' && (
                <form onSubmit={handleSubmit} className="form form reservation-form">
                    <h2 className='reservation-form-tittle'>{t('bookingForm')}</h2>
                    <section className="reservation-form-wrap">
                        <section className="reservation-form-details">                        
                            <section className='reservation-form-name'>
                                <label htmlFor="name">{t('nameLabel')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder={t('namePlaceholder')}
                                />
                            </section>
                            <section className='reservation-form-email'>
                                <label htmlFor="email">{t('emailLabel')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={emailError ? 'input-error' : ''}
                                    placeholder={t('emailPlaceholder')}
                                />
                            </section>
                        </section>
                        <section className='reservation-form-calendar'>
                            <DatePicker onDateChange={handleDateChange} />
                        </section>
                    </section>
                    <button type="submit" disabled={!isFormValid()}>
                        {t('submitButton')}
                    </button>
                </form>
            )}
        </div>
        </ScrollTransform>
    );
}
