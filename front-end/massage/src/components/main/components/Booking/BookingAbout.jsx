import React from 'react'
import { useTranslation } from 'react-i18next';
import './Booking.scss'
import ScrollTransform from '../../ScrollTransform';

export default function BookingAbout() {
  const { t } = useTranslation();

  const bookingBgText = t('booking-bg-text');
  return (
    <section style={{ '--booking-tittle-bg-text': `"${bookingBgText}"` }}>
    <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
    <h2 className="booking-tittle">
      {t('booking-tittle')}
    </h2>
    </ScrollTransform>
    <section className="booking-content">
      <ScrollTransform initialTransform={{ x: 20, y: 0 }}>
      <img className='booking-content-img' src="/booking.jpeg" alt="booking.jpeg" />
      </ScrollTransform>
      <ScrollTransform initialTransform={{ x: -20, y: 0 }}>
      <p className="booking-content-description">
        {t('booking-description-text')}
      </p>
      </ScrollTransform>
    </section>
    </section>
  )
}
