import classes from './ProfilePage.module.css'
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Pro_posts from './Pro_posts';
import React, { useContext } from "react";
import { UserIdContext } from "../../contexts/UserIdContext";
import { useQuery } from 'react-query';

export default function ProfilePage(props) {

    const {userId} = useContext(UserIdContext);     // id of person logged into account.

    const { isLoading: isLoadingPosts, data: postsData } = useQuery('hisPosts', async () => {
        const response = await fetch('https://tame-blue-deer-tie.cyclic.cloud/ad-api/getAds/sellerId/' + userId, {mode: 'cors'});       // fetching posts on basis of his userId.
        return response.json();
    });

    const { isLoading: isLoadingData, data: userData } = useQuery('hisData', async () => {
        // using same api-endpoint as seller info to fetch user info(basically requires the same set of info).
        const response = await fetch('https://tame-blue-deer-tie.cyclic.cloud/auth/getSeller/sellerId/' + userId, {mode: 'cors'});
        return response.json();
    });


    return (
        <div>
            <div className={classes.headbar}>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
            <div className={classes.body}>
                <div className={classes.profilePart}>
                    {userData ?
                    <div>
                        <p className={classes.profileHead}> Your Data</p>
                        <p className={classes.name}>{userData.Name}</p>
                        <hr />
                        <p className={classes.roll}>{userData.roll_no}</p>
                        <hr />
                        <p className={classes.mail}>{userData.email}</p>
                        <hr />
                        <p className={classes.program}>{userData.program}</p>
                    </div>
                    : 
                    <div>Loading Your Profile Info...</div>}
                </div>
                <div className={classes.AdPart}>
                    <p className={classes.AdHead}> Your Posts</p>
                    {postsData ? postsData.map(post => <div key={post._id}><Pro_posts post={post} /></div>)
                    :
                    <div>Loading Your Ads...</div>}
                </div>
            </div>
        </div>
    );
}

