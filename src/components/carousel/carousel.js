import React from 'react';
import * as style from './carousel.module.scss';

export default function Carousel() {
    return (
        <div className={style.carousel}>
            <div className={style.carousel__item}>
                <button className={style.carousel__item__button}>
                    <span className={style.carousel__item__line}></span>
                    <span className={style.carousel__item__title}>test</span>
                </button>
                <button className={style.carousel__item__button}>
                    <span className={style.carousel__item__line}>
                        <span className={style.carousel__item__line__progress} style={{ width: '95%' }}></span>
                    </span>
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
                <button className={style.carousel__navigate__button}>{'<'}</button>
                <button className={style.carousel__navigate__button}>{'>'}</button>
            </div>
        </div>
    )
}