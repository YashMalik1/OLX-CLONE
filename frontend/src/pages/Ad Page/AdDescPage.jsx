import React from 'react';
import classes from './AdDescPage.module.css'
import logo from "../../assests/Logo.png";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import locate from '../../assests/location.png';




function extractdate(date) {
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

function dateFromObject(idd) {
  let ans = Date(parseInt(idd.substring(0, 8), 16) * 1000);
  let year = ans.substring(11, 16);
  let date = ans.substring(8, 10);
  let month = ans.substring(4, 7);
  return date + " " + month + " " + year;
}

//----------------------------------------------------


export default function AdDescPage(props) {
  const location = useLocation();
  const AdId = location.pathname.split('/')[2];

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response1 = await fetch('http://localhost:4000/ad-api/getAds/id/' + AdId);
      const thatPost = await response1.json();
      setPost(thatPost);
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

  /*Fuction to add commas in the price */
  let new_price;
  if (post && post.price) {
    new_price = post.price.toLocaleString("en-US");
  }
  else {
    new_price = "error while loading date";
  }


  return (
    <div>
      <div className={classes.headbar}>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className={classes.body}>
        <div className={classes.leftColumn}>

          <div className={classes.pro_image}>
            {/* {post && post.pro_image} */}
            <img src="https://images.unsplash.com/photo-1588627541420-fce3f661b779?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" />
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

            {(post && post.negotiable) ? <p className={classes.nego}>It is negotiable </p> : <p className={classes.notNego}>It is <b>not</b> negotiable</p>}
            <p className={classes.hostel}><img src={locate}></img><p classname={classes.hostelName}>{post && post.hostel}</p> </p>

            <p className={classes.postDate}>Ad was posted on <i>{dateFromObject(AdId)}</i> </p>

          </div>



          {/* ----------  About Seller -------- */}
          <div className={classes.aboutSeller}>
            <div className={classes.temporary}> {/*about seller part is just for understanding purpose. change it according to your need */}
              Seller Info
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora quasi magni mollitia animi exercitationem illo error impedit, quis perspiciatis iusto, sint nisi? Eius nobis ad voluptate eligendi, impedit modi, voluptatum quasi debitis perferendis quisquam dicta molestias molestiae ab commodi quos possimus unde doloribus obcaecati a repudiandae officiis assumenda. Explicabo voluptatem praesentium temporibus eligendi quas quisquam, sint obcaecati quos voluptas!
          </div>
        </div>

      </div>

    </div>

  )
}
