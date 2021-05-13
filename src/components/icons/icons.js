import React from 'react';
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiJoomla, SiMysql, SiNextDotJs, SiNodeDotJs, SiPhp, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { Icon } from '@iconify/react';
import nestJs from '@iconify-icons/simple-icons/nestjs';

const icons = (className) => {
    return {
        ReactJS: <SiReact className={className} />,
        NextJS: <SiNextDotJs className={className} />,
        Tailwind: <SiTailwindcss className={className} />,
        NodeJS: <SiNodeDotJs className={className} />,
        JavaScript: <SiJavascript className={className} />,
        NestJS: <Icon icon={nestJs} className={className} />,
        TypeScript: <SiTypescript className={className} />,
        Joomla: <SiJoomla className={className} />,
        PHP: <SiPhp className={className} />,
        HTML: <SiHtml5 className={className} />,
        CSS: <SiCss3 className={className} />,
        MySQL: <SiMysql className={className} />,
        Bootstrap: <SiBootstrap className={className} />
    }
}

export default function Icons({ iconName, className }) {
    return (
        icons(className)[iconName]
    )
}