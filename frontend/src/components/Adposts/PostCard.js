import React from 'react';
import classes from './PostCard.module.css';
import { Link } from 'react-router-dom';


function takeoutdate(date){
  if(!date) return;
  let temp=date.toString();
  let year=parseInt(temp.substring(0,4));
  let month=parseInt(temp.substring(5,7));
  let dat=parseInt(temp.substring(8,10));
  let monthstring;
  switch(month){
    case 1: monthstring="Jan";
    break;
    case 2: monthstring="Feb";
    break;
    case 3: monthstring="Mar";
    break;
    case 4: monthstring="Apr";
    break;
    case 5: monthstring="May";
    break;
    case 6: monthstring="Jun";
    break;
    case 7: monthstring="Jul";
    break;
    case 8: monthstring="Aug";
    break;
    case 9: monthstring="Sep";
    break;
    case 10: monthstring="Oct";
    break;
    case 11: monthstring="Nov";
    break;
    default: monthstring="Dec";
    break;
  }

  let ans= dat+" "+monthstring+" "+year;
  return ans;
}



export default function PostCard(props) {
  // const desc = props.post.description;
  const id = props.post._id;
  const url = "/ads/" + id;
  let date=takeoutdate(props.post.dateOfBuying);
  // let postdate=takeoutdate();

  const PF = 'https://tame-blue-deer-tie.cyclic.cloud/images/';

   /*Fuction to add commas in the price */
  
  let post_date;
  if (props.post && props.post.createdAt) {
    post_date = takeoutdate(props.post.createdAt);
  }
  else {
    post_date = "error";
  }
  let new_price=props.post.price.toLocaleString("en-US");

  return (
    <Link to={url}>
      <div className={classes.posts}>
          <img className={classes.image} src={PF + props.post.photo} alt="" />
          <p className={classes.price}>&#8377;{new_price}</p>
          <p className={classes.dateOfBuying}>{date}</p>
          <p className={classes.pro_name}>{props.post.pro_name}</p>
          <p className={classes.hostel}>{props.post.hostel}</p>
          <p className={classes.postDate}><i>{post_date}</i></p>
         
      </div>
    </Link>
  );
};


