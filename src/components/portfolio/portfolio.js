import React from 'react';
import Carousel from '../carousel/carousel';
import H4 from '../text/h4';
import H6 from '../text/h6';
import * as style from './portfolio.module.scss';

const projects = [
    {
        title: "hoewarmishet.nl",
        type: "WEBAPP",
        description: "Hoewarmishet.nl (howwarmisit) allows you to get the current temperature directly on your screen. The web application uses the (if allowed) GPS coordinates from the device that is being used. After collecting the coordinates, the current temperature will be requested at the openweathermap api.",
        image: "https://images.ctfassets.net/f8nsofylxdsg/1IzbHoKioDXOqCMzv8fi0S/fa30067d4a580c1be3048166ca639b77/hoewarmishet.png",
        tech: [
            'NextJS',
            "TailwindCSS",
            "NodeJS",
            "ReactJS"
        ],
        viewProject: "https://hoewarmishet.nl"
    },
    {
        title: "sny.nu",
        type: "WEBAPP",
        description: "A URL shortener that checks the URLs on possible vulnerabilities in the Google Risk API.",
        image: "https://images.ctfassets.net/f8nsofylxdsg/1IzbHoKioDXOqCMzv8fi0S/fa30067d4a580c1be3048166ca639b77/hoewarmishet.png",
        tech: [
            'NextJS',
            "TailwindCSS",
            "NodeJS",
            "ReactJS",
            "JavaScript",
            "NestJS",
            "TypeScript"
        ],
        viewProject: "https://sny.nu"
    },
    {
        title: "olympiahaarlem.nl",
        type: "Joomla Template",
        description: "OlympiaHaarlem joomla template.",
        image: "https://images.ctfassets.net/f8nsofylxdsg/1IzbHoKioDXOqCMzv8fi0S/fa30067d4a580c1be3048166ca639b77/hoewarmishet.png",
        tech: [
            'Joomla',
            "PHP",
            "HTML",
            "CSS"
        ],
        viewProject: "http://olympiahaarlem.nl"
    },
    {
        title: "olympiahaarlem verhuur",
        type: "Rental System",
        description: "Hoewarmishet.nl (howwarmisit) allows you to get the current temperature directly on your screen. The web application uses the (if allowed) GPS coordinates from the device that is being used. After collecting the coordinates, the current temperature will be requested at the openweathermap api.",
        image: "https://images.ctfassets.net/f8nsofylxdsg/1IzbHoKioDXOqCMzv8fi0S/fa30067d4a580c1be3048166ca639b77/hoewarmishet.png",
        tech: [
            'PHP',
            "Bootstrap",
            "HTML",
            "MySQL"
        ],
        viewProject: "http://verhuur.olympiahaarlem.nl"
    },
]

export default function Portfolio() {
    return (
        <div className={style.portfolio__wrapper}>
            <div className={style.portfolio__inner}>
                <H6>PORTFOLIO</H6>
                <H4>The projects I work(ed) on</H4>

                <Carousel projects={projects} />
            </div>
        </div>
    );
}