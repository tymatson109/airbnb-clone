import React from 'react'
import './HostPage.css';
import { Icon, InlineIcon } from '@iconify/react';
import airbnbIcon from '@iconify-icons/simple-icons/airbnb';


const HostPage = () => {

    const homeClicked = () => {
        window.history.pushState({}, '', '/');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <div className="hostpage">
            <div className="hostpage__head">
                <Icon onClick={() => homeClicked()} className="hostpage__logo" icon={airbnbIcon} />
                <div className="hostpage__text">
                    <div className="hostpage__text1">BECOME A HOST</div>
                    <div className="hostpage__text2">A space to share,<br /> a world to gain</div>
                    <div className="hostpage__text3">Hosting can help you turn your extra space into <br /> extra income and pursue more of what you love.</div>
                    <button className="hostpage__button">Get started</button>
                </div>
            </div>
            <div className="hostpage__body">
                <div className="hostpage__chapter">
                    <div className="hostpage__chapterHeader">Your next chapter,<br /> made possible by<br /> Hosting</div>
                        <div className="hostpage__card">
                            <div className="hostpage__cardHeader">Welcome what’s next</div>
                            <div className="hostpage__cardBody">
                                Enjoy the flexibility of being your own <br /> boss, earn extra income, and make lifelong <br /> connections through hosting.
                            </div>
                            <a className="hostpage__cardLink" href="">Explore the world of hosting</a>
                        </div>
                        <div className="hostpage__card cardOne">
                            <div className="hostpage__cardHeader">Host with confidence</div>
                            <div className="hostpage__cardBody">
                                From 24/7 support and our helpful Host<br /> community, to custom tools, insights, and<br /> education, we’re invested in your success.
                            </div>
                            <a className="hostpage__cardLink" href="">How we support Hosts</a>
                    </div>
                </div>
            </div>
            <div className="hostpage__answers">
                <div className="hostpage__answersText">
                    <div className="hostpage__answersTitle">GET ANSWERS</div>
                    <div className="hostpage__answersAsk">Ask a real host</div>
                    <div className="hostpage__answersBody">Whether you have a quick question or want some<br /> hosting tips, you can message a host and get<br /> answers</div>
                    <button className="hostpage__answersButton">Message a host</button>
                </div>
                <div className="hostpage__answersCard">

                </div>
            </div>
        </div>
    )
}

export default HostPage;
