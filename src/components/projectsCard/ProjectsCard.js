import React from 'react'

import './ProjectsCard.css'

export const ProjectsCard = ({ project }) => {
    return (
        <div className = 'project-card'>
            <p><b>Name: </b> {project.name} </p>
            <p><b>Description: </b> {project.description} </p>
            <p><b>Link: </b> <a href = {project.link}>{project.link}</a> </p>
        </div>
    )
}