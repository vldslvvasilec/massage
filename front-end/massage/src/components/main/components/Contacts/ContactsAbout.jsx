import React from 'react'
import { useTranslation } from 'react-i18next';
import { IoMdTime } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import './Contacts.scss';
import ScrollTransform from '../../ScrollTransform';

export default function ContactsAbout({contactsData}) {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const contactsAboutTittleBgText = t('contacts-about-bg-text');
    const contactsAboutAboutBgText = t('contactsAboutAboutBgText');
    const contactsAboutOpenBgText = t('contactsAboutOpenBgText');
    const contactsAboutContactsBgText = t('contactsAboutContactsBgText');

  return (
    <>
        <div className="contactsAbout">
            <section style={{ '--contacts-tittle-bg-text': `"${contactsAboutTittleBgText}"` }}>
            <ScrollTransform initialTransform={{ x: 0, y: 20 }}>
            <h2 className="contactsAboutTittle">
                {t('contacts-about-tittle')}
            </h2>
            </ScrollTransform>
            </section>
            <section className="contactsAboutCards">
                <section className="contactsAboutAbout" style={{ '--contactsAboutAbout-bg-text': `"${contactsAboutAboutBgText}"` }}>
                    <GoBookmark />
                    <h3 className="contactsAboutAboutTittle">{t('contactsAboutAboutTittle')}</h3>
                    <p className="contactsAboutAboutDesc">{t('contactsAboutAboutDescription')}</p>
                </section>
                <section className="contactsAboutOpen" style={{ '--contactsAboutOpen-bg-text': `"${contactsAboutOpenBgText}"` }}>
                    <IoMdTime />
                    <h3 className="contactsAboutOpenTittle">{t('contactsAboutOpenTittle')}</h3>
                    <p className="contactsAboutOpenDesc">{contactsData.hours.mondayToSunday[lang]}</p>
                </section>
                <section className="contactsAboutContacts" style={{ '--contactsAboutContacts-bg-text': `"${contactsAboutContactsBgText}"` }}>
                    <FaMobileAlt />
                    <h3 className="contactsAboutContactsTittle">{t('contactsAboutContactsTittle')}</h3>
                    <p className="contactsAboutContactsDesc">
                        <span className="contactsAboutContactsDescDetails">{contactsData.address.additionalAddress}</span>
                        <span className="contactsAboutContactsDescDetails">{contactsData.address.phone}</span>
                        <span className="contactsAboutContactsDescDetails">{contactsData.address.email}</span></p>
                </section>
            </section>
            <section className="contactsAboutDescription">
                <ScrollTransform initialTransform={{ x: -20, y: 0 }}>
                <img className="contactsAboutDescriptionImg" src="/contactsImg.jpeg" alt="contactsAboutDescriptionImg" />
                </ScrollTransform>
                <ScrollTransform initialTransform={{ x: 20, y: 0 }}>
                <p className="contactsAboutDescriptionText">{t('contactsAboutDescriptionText')}</p>
                </ScrollTransform>
            </section>
        </div>
    </>
  )
}
