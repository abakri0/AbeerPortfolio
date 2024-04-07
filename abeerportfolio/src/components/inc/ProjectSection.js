import React from 'react'
import "../styles/ProjectSection.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from './Slider';


export default function ProjectSection() {
    return (
        
        <div className='ProjectSection'>
            <h1 className='ProjectSectiontext' dir='rtl'>
                أعمالي:
            </h1>
            <Sliders />
        </div>
    )
}
