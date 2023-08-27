import React from 'react';
import classes from './AdDescPage.module.css'
import logo from "../../assets/Logo.png";
import locate from '../../assets/location.png';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



function extractdate(date) {
  if (!date) return;
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

  let ans = dat + " " + monthstring + ", " + year;
  return ans;
}


function extractdept(roll) {
  let temp = roll.toString();
  let ans;
  switch (temp.substring(4, 6)) {
    case "01": ans = "CSE";
      break;
    case "02": ans = "ECE";
      break;
    case "03": ans = "ME";
      break;
    case "04": ans = "CE";
      break;
    case "05": ans = "DD";
      break;
    case "06": ans = "BSBE";
      break;
    case "07": ans = "CL";
      break;
    case "08": ans = "EEE";
      break;
    case "21": ans = "EPH";
      break;
    case "22": ans = "CST";
      break;
    case "23": ans = "M&C";
      break;
    default: ans = "-";
      break;
  }
  return ans;
}


//----------------------------------------------------


export default function AdDescPage() {
  const location = useLocation();
  const AdId = location.pathname.split('/')[2];

  const [post, setPost] = useState(null);
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response1 = await fetch('https://tame-blue-deer-tie.cyclic.cloud/ad-api/getAds/id/' + AdId, { mode: 'cors' });
      const thatPost = await response1.json();
      setPost(thatPost);

      const SellerId = thatPost.sellerId;
      const response2 = await fetch('https://tame-blue-deer-tie.cyclic.cloud/auth/getSeller/sellerId/' + SellerId, { mode: 'cors' });
      const thatSeller = await response2.json();
      setSeller(thatSeller);

    }
    fetchPost();

  }, [AdId]);



  /*Function to format date in nicer format */
  let new_date;
  if (post && post.dateOfBuying) {
    new_date = extractdate(post.dateOfBuying);
  }
  else {
    new_date = "error while loading date";
  }

  let post_date;
  if (post && post.createdAt) {
    post_date = extractdate(post.createdAt);
  }
  else {
    post_date = "error while loading date";
  }

  /*Fuction to add commas in the price */
  let new_price;
  if (post && post.price) {
    new_price = post.price.toLocaleString("en-US");
  }
  else {
    new_price = "error while loading date";
  }

  /*---Extract Information from Roll No. */
  let dept;
  let enrolled_year;
  let program;
  if (seller && seller.roll_no) {
    dept = extractdept(seller.roll_no);
    enrolled_year = seller.roll_no.toString().substring(0, 2);
    let temp = seller.roll_no.toString().substring(2, 4);
    if (temp == "01") {
      program = "B.Tech";
    }
    else {
      program = "Non-B.Tech";
    }
  }

  return (
    <div>
      <div className={classes.headbar}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={classes.body}>
        <div className={classes.leftColumn}>

          <div className={classes.pro_image}>
            {/* {post && post.pro_image} */}
            {post && <img src={'https://tame-blue-deer-tie.cyclic.cloud/images/' + post.photo} alt="post" />}

          </div>
          <hr />
          <p className={classes.pro_name}>{post && post.pro_name}</p>

          <hr className={classes.hr} />

          <p className={classes.descriptionHead}>Description</p>
          <p className={classes.description}>{post && post.description}</p>

          <hr className={classes.hr} />

          <p className={classes.descriptionHead}>Details</p>
          <p className={classes.dateOfBuying}><b>Category : </b>{post && post.category}</p>
          <p className={classes.dateOfBuying}><b>Purchase Date : </b>{new_date}</p>
          <p className={classes.Add}> <b>Ad ID :  </b>{AdId}</p>
        </div>


        {/*-------------Right Column----------------*/}
        <div className={classes.rightColumn}>
          <div className={classes.aboutAd}>

            <p className={classes.price}>&#8377; {new_price}</p>

            {(post && post.negotiable) ? <p className={classes.nego}>It is negotiable </p> : <p className={classes.notNego}>It is <b>non</b>-negotiable</p>}
            <span className={classes.hostel}><img src={locate} alt="location logo"></img><p className={classes.hostelName}>{post && post.hostel}</p> </span>

            <p className={classes.postDate}>Ad was posted on <i>{post_date}</i> </p>

          </div>



          {/* ----------  About Seller -------- */}
          <div className={classes.aboutSeller}>
            <div className={classes.temporary}>
              Seller Info
              <hr />
            </div>
            <p>
              {seller && seller.Name} <br />
              <i className="fa fa-envelope"></i> &nbsp;
              {seller && seller.email} <br />
              Department : {dept} <br />
              Year Enrolled : 20{enrolled_year} <br />
              Program : {program}
            </p>
          </div>
        </div>

      </div>

    </div>

  )
}
