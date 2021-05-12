import React from 'react';
import H5 from '../text/h5';
import H3 from '../text/h3';
import * as style from './project.module.scss';
//import * as icons from 'react-icons/si';


export default function Project({ project }) {
    return (
        <div className={style.project}>
            <div className={style.project__left}>
                <H3>{ project.title }</H3>
                <H5>{ project.type }</H5>
                <p>
                    { project.description }
                </p>
                <div className={style.project__tech}>
                    {
                        project.tech.map((tech) => <p key={tech}>{ tech }</p>)
                    }
                </div>
            </div>
            <div className={style.project__right}>
                <p>test</p>
            </div>
        </div>
    )
}