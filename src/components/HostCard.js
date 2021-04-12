import React from 'react';
import './HostCard.css';

const HostCard = () => {

    const hostClicked = () => {
        window.history.pushState({}, '', '/host');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <div className="hostcard">
            <div className="hostcard__card">
                <div className="hostcard__cardText">
                    <h1>Become a Host</h1>
                    <p>Earn extra income and unlock new opportunities by sharing your space.</p>
                    <button onClick={() => hostClicked()} >Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default HostCard
