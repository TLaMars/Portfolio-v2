import React from 'react';
import Carousel from '../../carousel/carousel';
import H4 from '../../text/h4';
import H6 from '../../text/h6';
import * as style from './portfolio.module.scss';

export default function Portfolio({ data }) {
    return (
        <section className={style.portfolio__wrapper} id="portfolio">
            <div className={style.portfolio__inner}>
                <H6>{ data.title }</H6>
                <H4>{ data.subTitle }</H4>

                <Carousel projects={data.projects} />
            </div>
        </section>
    );
}
