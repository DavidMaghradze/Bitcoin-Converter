import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import UserProfile from './UserProfile/UserProfile';
import ReferralSystem from './ReferralSystem';

class App extends React.Component {

    render(){
        return (
            <div className="app-wrapper">
                <BrowserRouter>
                    <Navbar/>
                    <div className="main-content">
                        <UserProfile/>
                        <Switch>
                            <Route exact path="/" component={ReferralSystem}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;