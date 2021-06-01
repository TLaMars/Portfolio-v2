import React from 'react';
import * as style from './project.module.scss';
import Icons from '../icons/icons';
import Computer from '../icons/computes';

export default function Project({ project }) {
    return (
        <div className={style.project}>
            <div className={style.project__left}>
                <h5 className="h3">{ project.title }</h5>
                <h6 className="h5">{ project.type }</h6>
                <p>
                    { project.description.description }
                </p>
                <div className={style.project__tech}>
                    {
                        project.usedTechnics.map((tech) => 
                        <div key={tech} className={style.project__tech__icon}>
                            <Icons key={tech} iconName={tech} className={style.project__tech__icon__svg} />
                            <span>{tech}</span>
                        </div>
                        )
                    }
                </div>
                { project.viewProject && <a href={project.viewProject} target="_blank" rel="noreferrer">View Project</a> }
            </div>
            <div className={style.project__right}>
                <Computer image={project.example.file.url}/>
            </div>
        </div>
    )
}