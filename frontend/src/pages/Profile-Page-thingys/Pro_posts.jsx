import React from 'react';
import { useState } from 'react';
import PostCard from '../../components/Adposts/PostCard';
import classes from './Pro_posts.module.css'



function takeoutdate(date) {
    if (!date)
        return;
    let temp = date.toString();
    let year = parseInt(temp.substring(0, 4));
    let month = parseInt(temp.substring(5, 7));
    let dat = parseInt(temp.substring(8, 10));
    let monthstring;
    switch (month) {
        case 1: monthstring = "January";
            break;
        case 2: monthstring = "February";
            break;
        case 3: monthstring = "March";
            break;
        case 4: monthstring = "April";
            break;
        case 5: monthstring = "May";
            break;
        case 6: monthstring = "June";
            break;
        case 7: monthstring = "July";
            break;
        case 8: monthstring = "August";
            break;
        case 9: monthstring = "September";
            break;
        case 10: monthstring = "October";
            break;
        case 11: monthstring = "November";
            break;
        default: monthstring = "December";
            break;
    }

    let ans = dat + " " + monthstring + " " + year;
    return ans;
}

export default function Pro_posts(props) {

    const [deleted, setDeleted] = useState(0);

    const deleteHandler = () => {
        const postId = props.post._id
        const deletePost = async () => {
            const response = await fetch('https://tame-blue-deer-tie.cyclic.cloud/ad-api/deleteAd/postId/' + postId, {
                method: "DELETE",
            }, {mode: 'cors'});
            const deletedPost = await response.json();
            console.log("Deleted post is : ", deletedPost);
        };
        deletePost();
        setDeleted(1);
    }


    return (
        <div className={classes.body}>
            {!deleted ? 
            <div>
                <PostCard post={props.post} key={props.post._id} />
                <div className={classes.desc}>
                    <p className={classes.descHead}>Description : </p>
                    <p className={classes.description}>{props.post.description}</p>
                    <button type='button' onClick={deleteHandler}>Delete</button>
                </div>
                <hr />
            </div>
            :
            null}
        </div>
    )
}

