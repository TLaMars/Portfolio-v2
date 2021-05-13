import React, { useEffect, useState } from 'react';
import H5 from '../text/h5';
import H3 from '../text/h3';
import * as style from './project.module.scss';
import Icons from '../icons/icons';
import Computer from '../icons/computes';
//import * as icons from 'react-icons/si';


export default function Project({ project }) {
    const [description, setDescription] = useState("");

    useEffect(() => {
        const rawDescription = JSON.parse(project.description.raw);
        setDescription(rawDescription.content[0].content[0].value);
    }, [project]);

    return (
        <div className={style.project}>
            <div className={style.project__left}>
                <H3>{ project.title }</H3>
                <H5>{ project.type }</H5>
                <p>
                    { description }
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
                <a href={project.viewProject} target="_blank" rel="noreferrer">View Project</a>
            </div>
            <div className={style.project__right}>
                <Computer image={project.example.file.url}/>
            </div>
        </div>
    )
}