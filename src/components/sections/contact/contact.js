import React from 'react';
import { SiLinkedin, SiMailDotRu } from 'react-icons/si';
import H4 from '../../text/h4';
import H6 from '../../text/h6';
import * as style from './contact.module.scss';

export default function contact() {
    const openMail = () => {
        window.location = 'mailto:hello@thomaur.dev?subject=I wanna drink a digital coffee';
    }

    const openLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/thomaslamars/';
    }

    return (
        <section className={style.contact__wrapper} id="contact">
            <div className={style.contact__inner}>
                <H6>CONTACT</H6>
                <H4>Want to drink a digital coffee?</H4>

                <div className={style.contact__inner__socials}>
                    <button aria-label='mail' className={style.contact__inner__social} onClick={openMail}>
                        <SiMailDotRu />
                        <p>Mail</p>
                    </button>
                    <button aria-label='linkedin' className={style.contact__inner__social} onClick={openLinkedIn}>
                        <SiLinkedin />
                        <p>LinkedIn</p>
                    </button>
                </div>
            </div>
        </section>
    )
}