import React from 'react'
import './Experiences.css'
import { experiences } from '../../constants/Experiences'
import { ExperienceCard } from '../experienceCard/ExperienceCard'

export const Experiences = () => {
    return (
        <div className = 'experience-container'>
            <h3>Working Experiences</h3>
            {
                experiences.experienceList.map(experience => <ExperienceCard key = {experience} experience = {experience} />)
            }
        </div>
    )
}