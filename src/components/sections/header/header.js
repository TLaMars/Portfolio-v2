import React from 'react';
import CodeBlock from '../../codeBlock/codeBlock';
import ArrowDown from '../../icons/arrowDown';
import Navbar from '../../navbar/navbar';
import H1 from '../../text/h1';
import H4 from '../../text/h4';
import * as style from './header.module.scss';
// import { Fade } from 'react-awesome-reveal';
import { injectIntl } from 'gatsby-plugin-intl';

function Header({ data, intl }) {
    const goToProjects = () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className={style.header}>
            <Navbar />
            <div className={style.header__intro}>
                <div className={style.header__intro__left}>
                    {/* <Fade direction="up" cascade duration={500}> */}
                        <H1>{ data.title } <span className={style.green}>Thomas</span></H1>
                        <H4>{ data.subTitle }</H4>
                        <button onClick={goToProjects} aria-label="Go to portfolio">
                            <ArrowDown /> { data.buttonText }
                        </button>
                    {/* </Fade> */}
                </div>
                <div className={style.header__intro__right}>
                    {/* <Fade direction="up" cascade> */}
                            <CodeBlock>
                                <span>{ intl.formatMessage({ id: "introduction.comment" }) }</span><br />
                                <span className='codeConst'>const</span> { intl.formatMessage({ id: "introduction.variable" }) } = <span>{`{`}</span><br />
                                &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "introduction.firstName" }) }":</span> <span className='codeString'>"Thomas"</span>,<br />
                                &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "introduction.lastName" }) }":</span> <span className='codeString'>"Lamars"</span>,<br />
                                &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "introduction.age" }) }":</span> <span className='codeNumber'>21</span>,<br />
                                &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "introduction.country" }) }":</span> <span className='codeString'>"{ intl.formatMessage({ id: "introduction.values.country" }) }"</span><br />
                                <span>{`}`}</span>
                            </CodeBlock>
                            <CodeBlock className={style.codeBlocks__floater} delay={2000}>
                                <span>{ intl.formatMessage({ id: "aboutMe.comment" }) }</span><br />
                                <span class="codeConst">const</span> { intl.formatMessage({ id: "aboutMe.variable" }) } = <span>{`{`}</span><br />
                                &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "aboutMe.profession" }) }"</span>: <span class="codeString">"{ intl.formatMessage({ id: "aboutMe.values.profession" }) }"</span>,<br />
                                &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "aboutMe.brain" }) }"</span>: <span class="codeString">"{ intl.formatMessage({ id: "aboutMe.values.brain" }) }"</span>,<br />
                                &nbsp;&nbsp;<span>"{ intl.formatMessage({ id: "aboutMe.hobbies" }) }"</span>: <span>[</span> <span class="codeString">"{ intl.formatMessage({ id: "aboutMe.values.hobbies.1" }) }"</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="codeString">"{ intl.formatMessage({ id: "aboutMe.values.hobbies.2" }) }"</span>, <span class="codeString">"{ intl.formatMessage({ id: "aboutMe.values.hobbies.3" }) }"</span> <span>]</span><br />
                                <span>{`}`}</span>
                            </CodeBlock>
                    {/* </Fade> */}
                </div>
            </div>
        </section>
    );
}

export default injectIntl(Header);
