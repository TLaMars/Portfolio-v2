import React from 'react';
import Portfolio from '../icons/portfolio';
import * as style from './navbar.module.scss';

export default function Navbar() {
    const scrollToSection = (section) => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className={style.navbar}>
            <div className={style.navbar__flex}>
                <div className={style.navbar__left}>
                    <Portfolio />
                </div>
                <div className={style.navbar__right}>
                    <div className={style.navbar__right__items}>
                        <button aria-label="portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</button>
                        <button aria-label="skills" onClick={() => scrollToSection('skills')}>Skills</button>
                        <button aria-label="contact" onClick={() => scrollToSection('contact')}>Contact</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}