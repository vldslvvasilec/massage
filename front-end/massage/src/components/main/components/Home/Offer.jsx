import React from "react";
import { useTranslation } from 'react-i18next';
import './Home.scss';
import ScrollTransform from "../../ScrollTransform";

const OfferComponent = () => {
    const { t } = useTranslation();
    const offerBgText = t('offer-bg-text');
    return (
        <section className="home-offer" style={{ '--offer-bg-text': `"${offerBgText}"` }}>
            <ScrollTransform initialTransform={{ x: -20, y: 0 }}>
            <h2 className="home-offer-tittle animated">{t('offer-tittle')}</h2>
            </ScrollTransform>
            <ScrollTransform initialTransform={{ x: 20, y: 0 }}>
            <p className="home-offer-description animated">{t('offer-description')}</p>
            </ScrollTransform>
        </section>
    );
};

export default OfferComponent;