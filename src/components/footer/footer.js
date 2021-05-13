import React from 'react';
import * as style from './footer.module.scss';

export default function Footer() {
    return (
        <div className={style.footer__wrapper}>
            <div className={style.footer__inner}>
                <p>Created By Thomas Lamars</p>
            </div>
        </div>
    )
}