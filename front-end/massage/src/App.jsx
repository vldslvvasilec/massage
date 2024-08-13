import { useState } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import GoogleMapsProvider from './components/main/components/Contacts/GoogleMapProvider';

const contactDetails = {
  address: {
    city: "Cannes",
    additionalAddress: "15 Rue Jean Riouffe 06400",
    phone: "+33 (6) 252 326 76",
    email: 'Contact@gold-tantric-massage.com',
    location: {
      lat: '43.55295706077913',
      lng: '7.016774959081832',
    }
  },
  hours: {
    mondayToSunday: {
      en: "Monday - Sunday: 24/7",
      fr: "Lundi - Dimanche : 24h/24, 7j/7"
    }
  },
  pricesData: [
    {
      src: '/typeMassages/icon-spa.png',
      title: { en: '1H TANTRIC MASSAGE', fr: '1H DE MASSAGE TANTRIQUE' },
      before: { en: '(IN CALL)', fr: '(Chez moi)' },
      price: '250'
    },
    {
      src: '/typeMassages/icon-spa.png',
      title: { en: '1H TANTRIC MASSAGE', fr: '1H DE MASSAGE TANTRIQUE' },
      before: { en: '(OUT CALL)', fr: '(A votre hôtel, résidence )' },
      price: '350'
    },
    {
      src: '/typeMassages/icon-spa.png',
      title: { en: '1H - 4 HANDS MASSAGE', fr: 'Titre du Service 2' },
      before: { en: '', fr: '' },
      price: '500'
    },
    {
      src: '/typeMassages/hot-stone.png',
      title: { en: '1H30 TANTRIC', fr: '1H30 TANTRIC' },
      before: { en: '+ HOT STONES', fr: '+ HOT STONES' },
      price: '300'
    },
    {
      src: '/typeMassages/hot-stone.png',
      title: { en: '1H YACHT', fr: '1H YACHT' },
      before: { en: '', fr: '' },
      price: '300'
    }
  ]
};


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <Router>
      <GoogleMapsProvider>
        <Header setHeaderHeight={setHeaderHeight} />
        <Main marginTop={headerHeight} contactDetails={contactDetails} pricesData={contactDetails.pricesData} />
        <Footer contactDetails={contactDetails} />
      </GoogleMapsProvider>
    </Router>
  );
}

export default App;
