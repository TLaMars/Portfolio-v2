import React from 'react';
import { SiBootstrap, SiCss3, SiDotNet, SiHtml5, SiJavascript, SiJoomla, SiMicrosoftazure, SiMysql, SiNextDotJs, SiNodeDotJs, SiNuxtDotJs, SiPhp, SiPython, SiReact, SiSass, SiTailwindcss, SiTypescript, SiVueDotJs } from 'react-icons/si';
import { Icon } from '@iconify/react';
import nestJs from '@iconify-icons/simple-icons/nestjs';

const icons = (className) => {
    return {
        ".NET": <SiDotNet className={className} />, 
        Azure: <SiMicrosoftazure className={className} />,
        Bootstrap: <SiBootstrap className={className} />,
        CSS3: <SiCss3 className={className} />,
        HTML5: <SiHtml5 className={className} />,
        JavaScript: <SiJavascript className={className} />,
        Joomla: <SiJoomla className={className} />,
        MySQL: <SiMysql className={className} />,
        NestJS: <Icon icon={nestJs} className={className} />,
        NextJS: <SiNextDotJs className={className} />,
        NodeJS: <SiNodeDotJs className={className} />,
        NuxtJS: <SiNuxtDotJs className={className} />,
        PHP: <SiPhp className={className} />,
        Python: <SiPython className={className} />,
        ReactJS: <SiReact className={className} />,
        Sass: <SiSass className={className} />,
        Tailwind: <SiTailwindcss className={className} />,
        TypeScript: <SiTypescript className={className} />,
        VueJS: <SiVueDotJs className={className} />,


    }
}

export default function Icons({ iconName, className }) {
    return (
        icons(className)[iconName] || ""
    )
}