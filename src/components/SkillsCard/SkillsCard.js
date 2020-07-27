import React from 'react';

import './SkillsCard.css';

export const SkillsCard = ({ skill }) => {
    return (
        <div className="skill-card">
            {skill}
        </div>
    )
}