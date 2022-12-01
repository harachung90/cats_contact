import React from 'react';
import phone from './images/phone-icon.png';
import mail from './images/mail-icon.png';

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt="profile"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone} alt="phone icon"/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} alt="mail icon"/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
