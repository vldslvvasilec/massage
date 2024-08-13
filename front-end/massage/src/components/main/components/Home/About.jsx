import React from "react";
import { useTranslation } from 'react-i18next';
import './Home.scss';
import ScrollTransform from "../../ScrollTransform";

const AboutComponent = () => {
    const { t } = useTranslation();
    const aboutBgText = t('about-bg-text');
    return (
        <section className="home-about" style={{ '--about-bg-text': `"${aboutBgText}"` }}>
            <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
            <h2 className="home-about-tittle animated">{t('about-tittle')}</h2>
            </ScrollTransform>
            <section className="home-about-content">
                <ScrollTransform initialTransform={{ x: -20, y: 0 }}>
                <p className="home-about-description animated">{t('about-description')}</p>
                </ScrollTransform>
                <ScrollTransform initialTransform={{ x: 20, y: 0 }}>
                <img className="home-about-img animated" src="/homeAboutImg.jpeg" alt="homeAboutImg" />
                </ScrollTransform>
            </section>
        </section>
    );
};

export default AboutComponent;