import React from 'react';

import './Skills.css';
import { skills } from './../../constants/Skills'
import { SkillsCard } from './../SkillsCard/SkillsCard';

export const Skills = (props) => {
    return (
        <div className="skills-container">
            <h3>Industry Knowledge</h3>
            <div className = 'industry-skill-container'>
                {
                    skills.industryKnowledge.map(skill => <SkillsCard key = {skill} skill = {skill} />)
                }
            </div>
            <h3>Tech Skill</h3>
            <div className = 'tech-skill-container'>
                {
                        skills.techSkills.map(skill => <SkillsCard key = {skill} skill = {skill} />)
                }
            </div>
            <h3>Inter-personal Skill</h3>
            <div className = 'inter-personal-skill-container'>
                {
                        skills.interpersonalSkills.map(skill => <SkillsCard key = {skill} skill = {skill} />)
                }
            </div>
        </div>    
            
    )
}