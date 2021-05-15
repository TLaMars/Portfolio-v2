import React, { useEffect, useState } from 'react';
import Icons from '../../icons/icons';
import * as style from './skills.module.scss';

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
            <h3 className="h6">{ data.title }</h3>
            <h4 className="h4">{ data.subTitle }</h4>

            <div className={style.skills__boxes}>
                <div className={style.skills__box}>
                    <h5 className="h6">Front-end</h5>
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
                    <h5 className="h6">Back-end</h5>
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
                    <h5 className="h6">Tools</h5>
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
        </section>
    );
}
