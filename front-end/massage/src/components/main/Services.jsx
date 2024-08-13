import React from "react";
import { useTranslation } from 'react-i18next';
import Gold from "./components/Services/Gold";
import Hot from "./components/Services/Hot";
import Price from "./components/Services/Price";


const Services = ({ pricesData, marginTop }) => {
    const { t } = useTranslation();
    return (
        <div className="services" style={{ marginTop: `${marginTop+20}px` }}>
            <Gold />
            <Hot />
            <Price pricesData={pricesData}/>
        </div>
    )
    ;
};

export default Services;