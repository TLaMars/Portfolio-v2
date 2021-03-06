import React, { useEffect, useState } from 'react';
import { SiLinkedin, SiMailDotRu } from 'react-icons/si';
import * as style from './contact.module.scss';

export default function Contact({ data }) {

    const [mail, setMail] = useState(null);
    const [linkedIn, setLinkedIn] = useState(null);

    useEffect(() => {
        setMail(data.socials.find((social) => social.title === "Mail"));
        setLinkedIn(data.socials.find((social) => social.title === "LinkedIn"));
    }, [data]);

    const openMail = () => {
        window.location = mail.url;
    }

    const openLinkedIn = () => {
        window.open(linkedIn.url);
    }

    return (
        <section className={style.contact__wrapper} id="contact">
            <div className={style.contact__inner}>
                <h3 className="h6">{ data.title }</h3>
                <h4 className="h4">{ data.subTitle }</h4>

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