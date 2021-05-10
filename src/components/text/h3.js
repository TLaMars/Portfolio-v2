import React from 'react';
import * as style from './text.module.scss';

export default function H3({ children }) {
    return (
        <h3 className={style.h3}>{ children }</h3>
    )
}