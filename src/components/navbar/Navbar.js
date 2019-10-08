import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import { ReactComponent as Dashboard }  from '../../svg/home.svg';
import { ReactComponent as Profile }  from '../../svg/profile.svg';
import { ReactComponent as Debt }  from '../../svg/debt.svg';
import { ReactComponent as Transactions }  from '../../svg/transactions.svg';
import { ReactComponent as Info }  from '../../svg/info.svg';
import { ReactComponent as Referral }  from '../../svg/referral.svg';
import { ReactComponent as Agreement }  from '../../svg/agreement.svg';

const Navbar = () => (
    <div className="navbar">
        <figure className="navbar__logo">
            <Link to="/">
                <img src="/img/logo.png" alt="mining data centre logo" /> 
            </Link>       
        </figure>
        <nav className="navbar__navigation">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/dashboard">
                        <Dashboard/> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/profile">
                        <Profile/> My profile
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/debt">
                        <Debt/> Current debt
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/transactions">
                        <Transactions/> Transactions history
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/info">
                        <Info/> My Miners info
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/">
                        <Referral/> Referral system
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/agreement">
                        <Agreement/> Agreement
                    </NavLink>
                </li>
            </ul>
        </nav>
        <footer className="navbar__footer">
            <section className="copyright">
                <p>
                    <img src="/img/copyright.png" alt="copyright image" />
                    Copyright, 2019
                </p>
            </section>
        </footer>
    </div>
);

export default Navbar;