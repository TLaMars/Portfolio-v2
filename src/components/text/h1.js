import React from 'react';
import * as style from './text.module.scss';

export default function H1({ children }) {
    return (
        <h1 className={style.h1}>{ children }</h1>
    )
}