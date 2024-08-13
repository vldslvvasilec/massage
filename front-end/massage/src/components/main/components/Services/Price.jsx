import React from 'react'
import { useTranslation } from 'react-i18next';
import Prices from './Prices';
import './service.scss';
import ScrollTransform from '../../ScrollTransform';

export default function Price({pricesData}) {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const priceBgText = t('sevice-price-bg-text');
    return (
        <section className="service-price" style={{ '--price-bg-text': `"${priceBgText}"` }}>
            <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
            <h2 className="service-price-tittle">{t('service-price-tittle')}</h2>
            </ScrollTransform>
            <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
            <p className="service-price-description">{t('service-price-description')}</p>
            </ScrollTransform>
            <ScrollTransform initialTransform={{ x: 0, y: 30 }}>
            <section className="service-price-content">
                {pricesData.map((item, index) => (
                    <Prices
                    key={index}
                    src={item.src}
                    title={item.title[lang]}
                    before={item.before[lang]}
                    price={item.price}
                    />
                ))}
            </section>
            </ScrollTransform>
        </section>
    )
}
