import React from 'react';
import classes from './Footer.module.css';
import Last_Line from './Last_Line';
import FooterComp from './FooterComp';

export default function Footer() {
  return (
    <div className={classes.Footer}>
        <FooterComp/>
        <Last_Line/>
    </div>
  )
}
 