import React from 'react'

import './About.css'
import { about } from './../../constants/About'

export const About = (props) => {
    return (
        <div className = 'about-container'>
            { about.bio }
        </div>
    )
}