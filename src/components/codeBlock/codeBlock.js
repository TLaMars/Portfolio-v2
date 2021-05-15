import React from 'react';
import * as style from './codeBlock.module.scss';
import Typist from 'react-typist';

export default function CodeBlock({ children, className, delay }) {
    return (
        <div className={`${style.codeBlock} ${className}`}>
                <code>
                    <Typist startDelay={delay} cursor={ { blink: true } }>
                        { children }
                    </Typist>
                </code>
        </div>
    )
}