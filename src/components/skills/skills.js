import React, { useEffect, useState } from 'react';
import Icons from '../icons/icons';
import H4 from '../text/h4';
import H6 from '../text/h6';
import * as style from './skills.module.scss';

export default function Skills({ skills }) {

    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);
    const [tools, setTools] = useState([]);

    useEffect(() => {
        let frontend = [], backend = [], tools = [];
        skills.forEach((skill) => {
            switch(skill.node.type) {
                case 'Frontend':
                    frontend.push(skill.node.name);
                    break;
                case 'Backend':
                    backend.push(skill.node.name);
                    break;
                case 'Tool':
                    tools.push(skill.node.name);
                    break;
                default:
                    break;
            };
        });

        setFrontend(frontend);
        setBackend(backend);
        setTools(tools);
    }, [skills]);

    return (
        <div className={style.skills}>
            <H6>SKILLS</H6>
            <H4>The skills I learned over the years</H4>

            <div className={style.skills__boxes}>
                <div className={style.skills__box}>
                    <H6>Front-end</H6>
                    <div className={style.skills__group}>
                        { frontend.map((skill) => 
                            <div className={style.skills__skill} key={skill}>
                                <Icons iconName={skill} />
                                <p>{skill}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.skills__box}>
                    <H6>Back-end</H6>
                    <div className={style.skills__group}>
                        { backend.map((skill) => 
                            <div className={style.skills__skill} key={skill}>
                                <Icons iconName={skill} />
                                <p>{skill}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.skills__box}>
                    <H6>Tools</H6>
                    <div className={style.skills__group}>
                        { tools.map((skill) => 
                            <div className={style.skills__skill} key={skill}>
                                <Icons iconName={skill} />
                                <p>{skill}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
