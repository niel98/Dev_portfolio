import React from 'react'

import './ExperienceCard.css'

export const ExperienceCard = ({ experience }) => {
    return (
        <div className = 'experience-card'>
            <p><b>Company Name:</b> {experience.companyName} </p>
            <br></br>
            <p><b>Role: </b> {experience.role} </p>
            <br></br>
            <p><b>About: </b> {experience.about} </p>
        </div>
    )
}