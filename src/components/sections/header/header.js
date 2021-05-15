import React from 'react';
import CodeBlock from '../../codeBlock/codeBlock';
import ArrowDown from '../../icons/arrowDown';
import Navbar from '../../navbar/navbar';
import * as style from './header.module.scss';
import { injectIntl } from 'gatsby-plugin-intl';

function Header({ intl }) {
    const goToProjects = () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className={style.header}>
            <Navbar />
            <div className={style.header__intro}>
                <div className={style.header__intro__left} data-sal="slide-up" data-sal-easing="ease" data-sal-duration={500}>
                    <h1 className="h1">{ intl.formatMessage({ id: "header.title" }) } <span className={style.green}>Thomas</span></h1>
                    <h2 className="h4">
                        { intl.formatMessage({ id: "header.subTitle_prefix" }) }
                        <span className={style.green}>frontend</span> { intl.formatMessage({ id: "header.subTitle_infix" }) }
                        <span className={style.green}>backend</span>  { intl.formatMessage({ id: "header.subTitle_suffix" }) }
                    </h2>
                    <button onClick={goToProjects} aria-label="Go to portfolio">
                        <ArrowDown /> { intl.formatMessage({ id: "header.buttonText" }) }
                    </button>
                </div>
                <div className={style.header__intro__right} data-sal="slide-up" data-sal-easing="ease" data-sal-duration={500}>
                        <CodeBlock>
                            <span>{ intl.formatMessage({ id: "introduction.comment" }) }</span><br />
                            <span className='codeConst'>const</span> { intl.formatMessage({ id: "introduction.variable" }) } = <span>{`{`}</span><br />
                            &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "introduction.firstName" }) }":</span> <span className='codeString'>"Thomas"</span>,<br />
                            &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "introduction.lastName" }) }":</span> <span className='codeString'>"Lamars"</span>,<br />
                            &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "introduction.age" }) }":</span> <span className='codeNumber'>21</span>,<br />
                            &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "introduction.country" }) }":</span> <span className='codeString'>"{ intl.formatMessage({ id: "introduction.values.country" }) }"</span><br />
                            <span>{`}`}</span>
                        </CodeBlock>
                        <CodeBlock className={style.codeBlocks__floater} delay={10000}>
                            <span>{ intl.formatMessage({ id: "aboutMe.comment" }) }</span><br />
                            <span className="codeConst">const</span> { intl.formatMessage({ id: "aboutMe.variable" }) } = <span>{`{`}</span><br />
                            &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "aboutMe.profession" }) }"</span>: <span className="codeString">"{ intl.formatMessage({ id: "aboutMe.values.profession" }) }"</span>,<br />
                            &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "aboutMe.brain" }) }"</span>: <span className="codeString">"{ intl.formatMessage({ id: "aboutMe.values.brain" }) }"</span>,<br />
                            &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "aboutMe.hobbies" }) }"</span>: <span>[</span> <span className="codeString">"{ intl.formatMessage({ id: "aboutMe.values.hobbies.1" }) }"</span>,<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="codeString">"{ intl.formatMessage({ id: "aboutMe.values.hobbies.2" }) }"</span>, <span className="codeString">"{ intl.formatMessage({ id: "aboutMe.values.hobbies.3" }) }"</span> <span>]</span><br />
                            <span>{`}`}</span>
                        </CodeBlock>
                </div>
            </div>
        </section>
    );
}

export default injectIntl(Header);
