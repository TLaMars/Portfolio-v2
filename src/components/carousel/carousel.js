import React, { useCallback, useEffect, useState } from 'react';
import * as style from './carousel.module.scss';
import Project from '../project/project';
import ArrowLeft from '../icons/arrowLeft';
import ArrowRight from '../icons/arrowRight';

export default function Carousel({ projects }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const goToNext = useCallback(() => {
        setActiveIndex(activeIndex === projects.length - 1 ? 0 : activeIndex + 1);
        setProgress(0);
    }, [activeIndex, projects, setActiveIndex, setProgress])

    const goToPrev = () => {
        setActiveIndex(activeIndex - 1 < 0 ? 0 : activeIndex - 1);
        setProgress(0);
    }

    const goToThisProject = (id) => {
        setActiveIndex(id);
        setProgress(0);
    }

    useEffect(() => {
        let progressInterval = setInterval(() => {
            setProgress(p => {
                if (p === 100) {
                    goToNext();
                } else {
                    return (p + 0.25);
                }
            });
        }, 50);

        return function cleanup() {
            clearInterval(progressInterval);
        }
    }, [goToNext])

    return (
        <div>
        
            <Project project={projects[activeIndex].node} />

            <div className={style.carousel}>
                <div className={style.carousel__items}>
                    { 
                        projects.map((project, id) => 
                            <button className={style.carousel__item__button} key={id} onClick={() => goToThisProject(id)}>
                                <span className={style.carousel__item__line}>
                                    { (activeIndex === id) && <span className={style.carousel__item__line__progress} style={{ width: progress + '%' }}></span> }
                                </span>
                                <span className={style.carousel__item__title}>{ project.node.title }</span>
                            </button>
                        )
                    }
                </div>
                <div className={style.carousel__navigate}>
                    <button onClick={goToPrev} className={style.carousel__navigate__button}><ArrowLeft /></button>
                    <button onClick={goToNext} className={style.carousel__navigate__button}><ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}