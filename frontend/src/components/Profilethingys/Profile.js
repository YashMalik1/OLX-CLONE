import React from 'react';
import { Link } from 'react-router-dom';
import { Logout } from '../Loginthingys/Logout';
import classes from './Profile.module.css';
import logout from '../../assets/logout.png';
import profile from '../../assets/profile.png';

const Profile = () => {

    return (
        <div className={classes.profile}>
            <p className={classes.prof_text}>Profile</p>
            <ul className={classes.list}>
                <Link to='/profile-page'>
                    <li className={classes.item1}>
                        <img src={profile} alt="profile" />
                        <span>View Profile</span>
                    </li>
                </Link>
                <li className={classes.item2}>
                    <img src={logout} alt="logout" />
                    <span><Logout /></span>
                </li>
            </ul>
            
        </div>
    );
}
 
export default Profile;