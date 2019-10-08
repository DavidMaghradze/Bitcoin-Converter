import React from 'react';

const UserProfile = () => (
    <header className="user-profile">
        <div className="user-profile-wrapper">
            <section className="user-profile__info">
                <figure className="user-profile__picture">
                    <img src="/img/lela.jpeg" alt="profile picture" />
                </figure>
                <section>
                    <h1 className="user-profile__title">Lela Tsutsumia</h1>
                    <span className="user-profile__balance"><strong>Balance:</strong> 0. 00172 BTC (Refferal: 5 000 GEL)</span>
                </section>
            </section>
            <section className="user-profile__right">
                <nav className="user-profile__notifications">
                    <ul>
                        <li>
                            <img src="/img/notifications.png" alt="notifications icon" />
                            <span className="badge"></span>
                        </li>
                        <li>
                            <img src="/img/settings.png" alt="settings icon" />
                        </li>
                        <li>
                            <img src="/img/messages.png" alt="messages icon" />
                        </li>
                    </ul>
                </nav>
                <div className="user-profile__signout">
                    Sign out
                    <button><img src="/img/signout.png" alt="sign out button" /></button>
                </div>
            </section>
        </div>
    </header>
);

export default UserProfile;