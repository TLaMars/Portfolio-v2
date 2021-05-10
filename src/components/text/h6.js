import React from 'react';
import * as style from './text.module.scss';

export default function H6({ children }) {
    return (
        <h6 className={style.h6}>{ children }</h6>
    )
}