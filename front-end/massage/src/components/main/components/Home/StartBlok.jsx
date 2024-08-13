import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.scss';

const ImageComponent = ({ city, src, alt }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
            <img className="fade-in-image" src={src} alt={alt} />
            {showOverlay && (
                <section className="overlay-section">
                    <h2 className="startBlokTittle">GOLD TANTRIC MASSAGE</h2>
                    <section className="startBlokButtons">
                        <Link to="/booking" className="link-left">{t('booking')}</Link>
                        <Link to="/services" className="link-right">{t('services')}</Link>
                    </section>
                    <p className="startBlokDiskription">{city}, Cannes & St Tropez</p>
                </section>
            )}
        </div>
    );
};

export default ImageComponent;
