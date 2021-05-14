import React, { useEffect, useState } from 'react';
import CodeBlock from '../../codeBlock/codeBlock';
import ArrowDown from '../../icons/arrowDown';
import Navbar from '../../navbar/navbar';
import H1 from '../../text/h1';
import H4 from '../../text/h4';
import * as style from './header.module.scss';

export default function Header({ data }) {
    const [introductionCB, setIntroductionCB] = useState(null);
    const [liveCB, setLiveCB] = useState(null);

    const goToProjects = () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        data.codeBlocks.forEach((block) => {
            if (block.title === "Introduction") {
                const data = JSON.parse(block.code.raw);
                setIntroductionCB(data.content[0].content[0].value);
            } else {
                const data = JSON.parse(block.code.raw);
                setLiveCB(data.content[0].content[0].value);
            }
        })
    }, [data])

    return (
        <section className={style.header}>
            <Navbar />
            <div className={style.header__intro}>
                <div className={style.header__intro__left}>
                    <H1>{ data.title }</H1>
                    <H4>{ data.subTitle }</H4>
                    <button onClick={goToProjects} aria-label="Go to portfolio">
                        <ArrowDown /> { data.buttonText }
                    </button>
                </div>
                <div className={style.header__intro__right}>
                    <CodeBlock code={introductionCB} />
                    <CodeBlock code={liveCB} className={style.codeBlocks__floater} />
                </div>
            </div>
        </section>
    );
}
