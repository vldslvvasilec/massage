import React from 'react'
import { useTranslation } from 'react-i18next';
import './service.scss';
import ScrollTransform from '../../ScrollTransform';

export default function Gold() {
    const { t } = useTranslation();
    const goldBgText = t('service-for-bg-text');
    return (
        <section className="service-gold" style={{ '--gold-bg-text': `"${goldBgText}"` }}>
            <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
            <h2 className="service-gold-tittle">{t('service-for-tittle')}</h2>
            </ScrollTransform>
            <section className="service-gold-content">
                <ScrollTransform initialTransform={{ x: -20, y: 0 }}>
                <img className="service-gold-img" src="/servise-img1.jpeg" alt="SerrviceGoldImg" />
                </ScrollTransform>
                <ScrollTransform initialTransform={{ x: 20, y: 0 }}>
                <p className="service-gold-description">{t('service-for-description')}</p>
                </ScrollTransform>
            </section>
        </section>
    );
}
