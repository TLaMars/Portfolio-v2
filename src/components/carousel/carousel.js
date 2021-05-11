import React, { useState } from 'react';
import * as style from './carousel.module.scss';

export default function Carousel({ projects }) {

    const [activeProject, setActiveProject] = useState(1);
    const lengthCarousel = 4;
    setInterval(() => {
        
    }, 2500)

    const goToNext = () => {
        setActiveProject(activeProject + 1);
        console.log(activeProject);
    }

    const goToPrev = () => {
        setActiveProject(activeProject - 1);
    }

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
                <button onClick={goToPrev} className={style.carousel__navigate__button}>{'<'}</button>
                <button onClick={goToNext} className={style.carousel__navigate__button}>{'>'}</button>
            </div>
        </div>
    )
}