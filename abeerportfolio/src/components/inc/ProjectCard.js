import React from 'react'
import "../styles/ProjectCard.css"
import template from "../../assets/img/Template.jpg"

export default function ProjectCard() {
    return (
        <div className='ProjectCardContainer'>
            <img src={template} alt='Abeer Project' className='ProjectCardImg'/>
            <div className='disc'>
                <h1 className='ProjectCardsTitle'>
                    الوصف
                </h1>
                <p className='ProjectCardP'>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.
                </p>
                </div>
        </div>
    )
}
