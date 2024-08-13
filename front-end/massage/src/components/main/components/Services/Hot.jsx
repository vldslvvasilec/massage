import React from 'react'
import { useTranslation } from 'react-i18next';
import './service.scss';
import ScrollTransform from '../../ScrollTransform';

export default function Hot() {
    const { t } = useTranslation();
    const hotBgText = t('service-hot-bg');
    return (
        <section className="service-hot" style={{ '--hot-bg-text': `"${hotBgText}"` }}>
            <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
            <h2 className="service-hot-tittle">{t('service-hot-tittle')}</h2>
            </ScrollTransform>
            <section className="service-hot-content">
                <ScrollTransform initialTransform={{ x: -20, y: 0 }}>
                <img className="service-hot-img" src="/servise-img2.jpeg" alt="SerrviceHotImg" />
                </ScrollTransform>
                <ScrollTransform initialTransform={{ x: -20, y: 0 }}>
                <p className="service-hot-description">{t('service-hot-description')}</p>
                </ScrollTransform>
            </section>
        </section>
    );
}
