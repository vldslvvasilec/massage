import React from "react";
import { useTranslation } from 'react-i18next';
import ImageComponent from "./components/Home/StartBlok";
import OfferComponent from "./components/Home/Offer";
import AboutComponent from "./components/Home/About";

const Home = ({city}) => {
    const { t } = useTranslation();

    return (
        <>
            <ImageComponent city={city} src="/homeStartImg.jpeg" alt="homeStartImg" />
            <OfferComponent />
            <AboutComponent />
        </>
    );
};

export default Home;
