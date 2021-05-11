import React from 'react';
import H5 from '../text/h5';
import H3 from '../text/h3';
import * as style from './project.module.scss';
//import * as icons from 'react-icons/si';


export default function Project() {
    return (
        <div className={style.project}>
            <div className={style.project__left}>
                <H3>hoewarmishet.nl</H3>
                <H5>WEBAPP</H5>
                <p>
                    hoewarmishet.nl is a web application that can give it’s users the current temperature on the gps coordinates.  
                </p>
                <div className={style.project__tech}>

                </div>
            </div>
            <div className={style.project__right}>
                
            </div>
        </div>
    )
}