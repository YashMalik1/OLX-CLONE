import React from "react";
import classes from "./MainBodyPosts.module.css";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { QueryNameContext } from "../../contexts/QueryNameContext";
import { QueryHostelContext } from "../../contexts/QueryHostelContext";

export default function MainBodyPosts(props) {
	const [posts, setPosts] = useState(null);

	const { queryName } = useContext(QueryNameContext);
	const { queryHostel } = useContext(QueryHostelContext);

	useEffect(() => {
		const fetchPosts = async () => {
			let response = Promise.resolve();
			if (props.category === "All") {
				if (props.filter.sort === "clear") {
					response = await fetch(
						"https://tame-blue-deer-tie.cyclic.cloud/ad-api/getAds/sort/clear", { mode: 'cors' }
					);
				} else if (props.filter.sort === "inc") {
					response = await fetch(
						"https://tame-blue-deer-tie.cyclic.cloud/ad-api/getAds/sort/inc", { mode: 'cors' }
					);
				} else {
					response = await fetch(
						"https://tame-blue-deer-tie.cyclic.cloud/ad-api/getAds/sort/dec"
					, { mode: 'cors' }
					);
				}
				const allPosts = await response.json();
				setPosts(allPosts);
			} else {
				if (props.filter.sort === "clear") {
					response = await fetch(
						"https://tame-blue-deer-tie.cyclic.cloud/ad-api/getAds/category/" +
							props.category +
							"/sort/clear", { mode: 'cors' }
					);
				} else if (props.filter.sort === "inc") {
					response = await fetch(
						"https://tame-blue-deer-tie.cyclic.cloud/ad-api/getAds/category/" +
							props.category +
							"/sort/inc", { mode: 'cors' }
					);
				} else {
					response = await fetch(
						"https://tame-blue-deer-tie.cyclic.cloud/ad-api/getAds/category/" +
							props.category +
							"/sort/dec", { mode: 'cors' }
					);
				}
				const categoricalPosts = await response.json();
				setPosts(categoricalPosts);
			}
		};
		fetchPosts();
	}, [props.category, props.filter.sort]);

	return (
		<div className={classes.Supreme}>
			<p className={classes.para}>Fresh Recomendations</p>
			<div className={classes.Adposts}>
				{posts &&
					posts
						.filter(
							(post) =>
								post.price >= props.filter.min_price &&
								post.price <= props.filter.max_price
						)
						.filter((post) => post.pro_name.toLowerCase().includes(queryName)) // to filter out with name of product searched
						.filter((post) => post.hostel.includes(queryHostel))               // to filter out with location/hostel searched
						.map((post) => <PostCard post={post} key={post._id} />)}
				{posts ? null : <div>No Ads in this category</div>}
			</div>
		</div>
	);
}
