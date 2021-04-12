import React from 'react'
import LiveCard from './LiveCard';
import './Live.css';

const Live = ({image, caption}) => {
    return (
        <div className="live">
            <div className="live__header">
                <h1>Live Anywhere</h1>
            </div>
            <div className="live__cardRow">
                <LiveCard image={"https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"} caption={"Entire homes"} />
                <LiveCard image={"https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"} caption={"Unique stays"} />
                <LiveCard image={"https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=720"} caption={"Farms and nature"} />
                <LiveCard image={"https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"} caption={"Pets allowed"} />
            </div>
        </div>
    )
}

export default Live;
