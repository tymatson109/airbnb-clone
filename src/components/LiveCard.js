import React from 'react'
import './LiveCard.css';

const LiveCard = ({image, caption}) => {
    return (
        <div className="livecard">
            <div className="livecard__image">
                <img src={image} />
            </div>
            <div className="livecard__caption">
                <span>{caption}</span>
            </div>
        </div>
    )
}

export default LiveCard
