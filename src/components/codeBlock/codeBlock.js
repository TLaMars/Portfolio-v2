import React from 'react';
import * as style from './codeBlock.module.scss';

export default function CodeBlock({ code, className }) {
    return (
        <div className={`${style.codeBlock} ${className}`}>
            <code>{ `// Introduction
const person = {
  "First Name": "Thomas",
  "Last Name": "Lamars",
  "Age": 21,
  "Country": "Holland"
};` }</code>
        </div>
    )
}