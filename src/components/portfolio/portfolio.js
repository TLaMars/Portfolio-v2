import React from 'react';
import Carousel from '../carousel/carousel';
import H4 from '../text/h4';
import H6 from '../text/h6';
import * as style from './portfolio.module.scss';

export default function Portfolio({ projects }) {

    return (
        <div className={style.portfolio__wrapper} id="portfolio">
            <div className={style.portfolio__inner}>
                <H6>PORTFOLIO</H6>
                <H4>The projects I work(ed) on</H4>

                <Carousel projects={projects} />
            </div>
        </div>
    );
}
