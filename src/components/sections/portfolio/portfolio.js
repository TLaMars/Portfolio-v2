import React from 'react';
import Carousel from '../../carousel/carousel';
import * as style from './portfolio.module.scss';

export default function Portfolio({ data }) {
    return (
        <section className={style.portfolio__wrapper} id="portfolio">
            <div className={style.portfolio__inner}>
                <h3 className="h6">{ data.title }</h3>
                <h4 className="h4">{ data.subTitle }</h4>

                <Carousel projects={data.projects} />
            </div>
        </section>
    );
}
