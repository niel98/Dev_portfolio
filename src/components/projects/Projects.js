import React from 'react'

import './Projects.css'

import { ProjectsCard } from './../projectsCard/ProjectsCard'

export const Projects = ({ projects }) => {
    return (
        <div className = 'projects-container'>
            <div className = 'industry-skill-container'>
                {
                    projects.projectList.map(project => <ProjectsCard project = {project}/>)
                }
            </div>
        </div>
    )
}