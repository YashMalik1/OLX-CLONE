import React from 'react';
import classes from './FooterComp.module.css';


export default function FooterComp() {
    return (
        <div className={classes.FooterComp}>
            <div className={classes.left}>
                <p className={classes.Head}> Customer Care</p>
                <p className={classes.body}>
                    Phone : <br />
                    9643763504 <br />
                    9546358484 <br />
                    Email : <br />
                    priyanshujaiswal009@gmail.com <br />
                    yashmalik2711@gmail.com
                </p>
            </div>
            <div className={classes.middle}>
                <p className={classes.Head}> About Us</p>
                <p className={classes.body}>
                    This olxclone(solely for IITG students) is developed by Priyanshu and Yash together. Feel free to reach out to us for any suggestions.
                </p>
            </div>
            <div className={classes.right}>
                <p className={classes.Head}> Follow Us</p>
                <p className={classes.body}>
                    <a href='https://www.instagram.com'><i className="fa fa-instagram"> Instagram</i></a><br />
                    <a href='https://www.facebook.com'><i className="fa fa-facebook"> Facebook</i></a><br />
                    <a href='https://www.linkedin.com'><i className="fa fa-linkedin"> LinkedIn</i></a><br />
                </p>
            </div>
        </div>
    )
}
