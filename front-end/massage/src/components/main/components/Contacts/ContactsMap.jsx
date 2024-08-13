import React from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import ScrollTransform from '../../ScrollTransform';

const ContactsMap = ({ contactsDataLocation }) => {
  const { t } = useTranslation();
  const mapCenter = {
    lat: parseFloat(contactsDataLocation.lat),
    lng: parseFloat(contactsDataLocation.lng),
  };

  return (
    <>
      <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
      <h2 className="wraper-map-tittle">{t('contactsMapTittle')}</h2>
      </ScrollTransform>
      <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
      <div className='wraper-map'>
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          center={mapCenter}
          zoom={12}
        >
          <MarkerF position={mapCenter} />
        </GoogleMap>
      </div>
      </ScrollTransform>
    </>
  );
}

export default ContactsMap;
