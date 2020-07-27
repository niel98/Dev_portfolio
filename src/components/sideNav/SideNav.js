import React from 'react'
import './SideNav.css'
import { Contact } from '../contact/Contact'

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className = 'sidenav'>
            <img
                src = 'https://pbs.twimg.com/profile_images/1278570628552015872/oLRRdZEO_400x400.jpg'
                className = 'avatar'
                alt = 'avatar'
                />
                <h2 className = 'main-name'> Moses Daniel Kwaknat </h2>
                <p className = 'subtitle'> "Passionate about tech, Software developer and Data Analyst" </p>
                <div className = 'sections-list'>
                    <p className = 'section-list-element' onClick = {()=> handleSectionClick('about')}> About Me </p>
                    <p className = 'section-list-element' onClick = {()=> handleSectionClick('skills')}> Skills </p>
                    <p className = 'section-list-element' onClick = {()=> handleSectionClick('projects')}> Projects </p>
                    <p className = 'section-list-element' onClick = {() => handleSectionClick('experiences')}> Experiences </p>  
                </div>
                <Contact />
        </div>
    )
}