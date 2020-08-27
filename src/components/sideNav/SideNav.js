import React from 'react'
import './SideNav.css'
import { Contact } from '../contact/Contact'

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className='sidenav'>
            <img
                src='https://avatars2.githubusercontent.com/u/41029959?s=460&u=0636ca51d286cdeaf1192a76215c5390eed79788&v=4'
                className='avatar'
                alt='avatar'
            />
            <h2 className='main-name'> Moses Daniel Kwaknat </h2>
            <p className='subtitle'> "Passionate about tech, Software developer and Data Analyst" </p>
            <div className='sections-list'>
                <p className='section-list-element' onClick={() => handleSectionClick('about')}> About Me </p>
                <p className='section-list-element' onClick={() => handleSectionClick('skills')}> Skills </p>
                <p className='section-list-element' onClick={() => handleSectionClick('projects')}> Projects </p>
                <p className='section-list-element' onClick={() => handleSectionClick('experiences')}> Experiences </p>
            </div>
            <Contact />
        </div>
    )
}