import React from 'react';
import Project from '../project/project';
import H4 from '../text/h4';
import H6 from '../text/h6';
import * as style from './portfolio.module.scss';

export default function Portfolio() {
    return (
        <div className={style.portfolio__wrapper}>
            <div className={style.portfolio__inner}>
                <H6>PORTFOLIO</H6>
                <H4>The projects I work(ed) on</H4>

                <Project />
                <div className={style.carousel}>
                    <div className={style.carousel__item}>
                        <button className={style.carousel__item__button}>
                            <span className={style.carousel__item__line}></span>
                            <span className={style.carousel__item__title}>test</span>
                        </button>
                        <button className={style.carousel__item__button}>
                            <span className={style.carousel__item__line}></span>
                            <span className={style.carousel__item__title}>test</span>
                        </button>
                        <button className={style.carousel__item__button}>
                            <span className={style.carousel__item__line}></span>
                            <span className={style.carousel__item__title}>test</span>
                        </button>
                        <button className={style.carousel__item__button}>
                            <span className={style.carousel__item__line}></span>
                            <span className={style.carousel__item__title}>test</span>
                        </button>
                    </div>
                    <div className={style.carousel__navigate}>
                        <button className={style.carousel__navigate__button}></button>
                        <button className={style.carousel__navigate__button}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}