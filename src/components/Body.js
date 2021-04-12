import React from 'react'
import './Body.css';
import HostCard from './HostCard';
import Live from './Live';

const Body = () => {
    return (
        <div className="body">
            <Live />
            <HostCard />
        </div>
    )
}

export default Body
