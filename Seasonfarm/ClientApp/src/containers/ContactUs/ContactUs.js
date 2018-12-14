import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactInfo } from 'components/ContactInfo';
import Location from 'components/Location';
import header from 'img/bg-img/header.jpg';

export class ContactUs extends Component {
    state = {
        email: 'seasonfarm@gmail.com',
        phone: '07-6197102'
    }

    render() {
        return <section className="contact-area bg-img bg-overlay section-padding-50" style={{ backgroundImage: `url(${header})` }}>
            <div className="container section-padding-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)' }}>
                <Location>
                    <ContactInfo text={this.state.email}>
                        <p><FontAwesomeIcon icon={faEnvelope} size="lg" />{this.state.email}</p>
                    </ContactInfo>
                    <ContactInfo text={this.state.phone}>
                        <p><FontAwesomeIcon icon={faPhone} size="lg" />{this.state.phone}</p>
                    </ContactInfo>
                </Location>
            </div>
        </section>
    }
}
