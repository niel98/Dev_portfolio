import React from 'react'

import './Portfolio.css'
import { SideNav } from './../sideNav/SideNav'
import { SectionContainer } from './../sectionContainer/SectionContainer'

export const Portfolio = ({ 
    handleSectionClick, 
    about, 
    skills,
    projects, 
    experiences,
    selectedHeading, 
    selectedQuote, 
    selectedSection }) => {
    //let handleMethod = props.handleMethod //destructuring instead
    // console.log('The props object is ', props)
    return (
        <div className = 'portfolio-container'>
            <div className = 'sidenav-container'>
                <SideNav
                    handleSectionClick = { handleSectionClick } />
                </div>
                <div className = 'main-section-container'>
                <SectionContainer
                about = {about}
                skills = {skills}
                projects = {projects}
                experiences = {experiences}
                selectedHeading = {selectedHeading}
                selectedQuote = {selectedQuote}
                selectedSection = {selectedSection} />
                </div>
            </div>
    )
}