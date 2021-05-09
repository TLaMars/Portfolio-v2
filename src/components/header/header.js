import React from 'react';
import CodeBlock from '../codeBlock/codeBlock';
import * as style from './header.module.scss';

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.header__left}>
                <h1>Hi!, I am <span>Thomas</span>,</h1>
                <h3>A 21 year old front-end and back-end developer from The Netherlands.</h3>
            </div>
            <div className={style.header__right}>
                <CodeBlock />
                <CodeBlock className={style.codeBlocks__floater} />
            </div>
        </div>
    );
}
