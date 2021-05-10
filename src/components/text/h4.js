import React from 'react';
import * as style from './text.module.scss';

export default function H4({ children }) {
    return (
        <h4 className={style.h4}>{ children }</h4>
    )
}