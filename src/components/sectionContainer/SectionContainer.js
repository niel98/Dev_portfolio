import React from 'react'

import './SectionContainer.css'
import { About } from './../About/About'
import { Skills } from './../skills/Skills'
import { Projects } from './../projects/Projects'
import { Experiences } from '../experiences/Experiences'

export const SectionContainer = ({ 
    handleSectionClick, 
    about, 
    skills, 
    projects,
    experiences,
    selectedHeading, 
    selectedQuote, 
    selectedSection }) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
    <h1 className="main-heading">{ selectedHeading }</h1>
    <p className="main-quote">{ selectedQuote }</p>
            </div>
            <div className = 'section-component'>
                {/* hashmap */}
                {
                    {
                        about: <About />,
                        skills: <Skills />,
                        projects: <Projects projects = {projects} />,
                        experiences: <Experiences />,
                    }[selectedSection] //calling the hashmap form th
                }
            </div>
        </div>
    )
}