import React from "react";
import { useTranslation } from 'react-i18next';
import ContactsAbout from "./components/Contacts/ContactsAbout";
import ContactsMap from "./components/Contacts/ContactsMap";

const Contact = ({ contactsData, marginTop }) => {
    const { t } = useTranslation();
    return (
        <div className="contacts" style={{ marginTop: `${marginTop+20}px` }}>
            <ContactsAbout contactsData={contactsData}/>
            <ContactsMap contactsDataLocation={contactsData.address.location}/>
        </div>

    );
};

export default Contact;