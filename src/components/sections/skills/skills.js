import React, { useEffect, useState } from 'react';
import Icons from '../../icons/icons';
import H4 from '../../text/h4';
import H6 from '../../text/h6';
import * as style from './skills.module.scss';
import { Fade } from 'react-awesome-reveal';

export default function Skills({ data }) {

    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);
    const [tools, setTools] = useState([]);

    useEffect(() => {
        let frontend = [], backend = [], tools = [];
        data.skills.forEach((skill) => {
            switch(skill.type) {
                case 'Frontend':
                    frontend.push(skill.name);
                    break;
                case 'Backend':
                    backend.push(skill.name);
                    break;
                case 'Tool':
                    tools.push(skill.name);
                    break;
                default:
                    break;
            };
        });

        setFrontend(frontend);
        setBackend(backend);
        setTools(tools);
    }, [data]);

    return (
        <section className={style.skills} id="skills">
            <H6>{ data.title }</H6>
            <H4>{ data.subTitle }</H4>

            <div className={style.skills__boxes}>
                <div className={style.skills__box}>
                    <H6>Front-end</H6>
                    <div className={style.skills__group}>
                        <Fade direction="up" cascade duration={500}>
                            { frontend.map((skill) => 
                                <div className={style.skills__skill} key={skill}>
                                    <Icons iconName={skill} />
                                    <p>{skill}</p>
                                </div>
                            )}
                        </Fade>
                    </div>
                </div>
                <div className={style.skills__box}>
                    <H6>Back-end</H6>
                    <div className={style.skills__group}>
                        <Fade direction="up" cascade duration={500}>
                        { backend.map((skill) => 
                            <div className={style.skills__skill} key={skill}>
                                <Icons iconName={skill} />
                                <p>{skill}</p>
                            </div>
                        )}
                        </Fade>
                    </div>
                </div>
                <div className={style.skills__box}>
                    <H6>Tools</H6>
                    <div className={style.skills__group}>
                        <Fade direction="up" cascade duration={500}>
                        { tools.map((skill) => 
                            <div className={style.skills__skill} key={skill}>
                                <Icons iconName={skill} />
                                <p>{skill}</p>
                            </div>
                        )}
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}
