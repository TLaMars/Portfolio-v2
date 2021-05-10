import React from 'react';
import CodeBlock from '../codeBlock/codeBlock';
import H1 from '../text/h1';
import H4 from '../text/h4';
import * as style from './header.module.scss';

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.header__left}>
                <H1>Hi!, I am <span className={style.green}>Thomas</span>,</H1>
                <H4>A 21 year old <span className={style.green}>front-end</span> and <span className={style.green}>back-end</span> developer from The Netherlands.</H4>
            </div>
            <div className={style.header__right}>
                <CodeBlock />
                <CodeBlock className={style.codeBlocks__floater} />
            </div>
        </div>
    );
}
