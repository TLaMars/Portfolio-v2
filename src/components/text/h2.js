import React from 'react';
import * as style from './text.module.scss';

export default function H2({ children }) {
    return (
        <h2 className={style.h2}>{ children }</h2>
    )
}