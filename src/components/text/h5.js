import React from 'react';
import * as style from './text.module.scss';

export default function H5({ children }) {
    return (
        <h5 className={style.h5}>{ children }</h5>
    )
}