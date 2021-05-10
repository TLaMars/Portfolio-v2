import React from 'react';
import * as style from './codeBlock.module.scss';

export default function CodeBlock({ code, className }) {
    return (
        <div className={`${style.codeBlock} ${className}`}>
            <code>
                <span>{"//"} My self introduction</span><br />
                <span className={style.codeConst}>const</span> person = <span>{`{`}</span><br />
                &nbsp;&nbsp;<span>"FirstName":</span> <span className={style.codeString}>"Thomas"</span>,<br />
                &nbsp;&nbsp;<span>"LastName":</span> <span className={style.codeString}>"Lamars"</span>,<br />
                &nbsp;&nbsp;<span>"Age":</span> <span className={style.codeNumber}>21</span>,<br />
                &nbsp;&nbsp;<span>"Country":</span> <span className={style.codeString}>"The Netherlands"</span><br />
                <span>{`}`}</span>
            </code>
        </div>
    )
}