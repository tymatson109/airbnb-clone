import React from 'react'
import Body from './Body'
import CovidNotification from './CovidNotification'
import Header from './Header'
import './App.css';
import Route from './Route';
import HostPage from './HostPage';

const App = () => {
    return (
        <div className="app">
            <Route path="/">
                <CovidNotification />
                <Header />
                <Body />
            </Route>
            <Route path="/host">
                <HostPage />
            </Route>
        </div>
    )
}

export default App
