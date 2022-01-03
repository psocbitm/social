import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Feed() {
	const [posts, setPosts] = useState([]);
	// just run useEffect only one time.
	useEffect(() => {
		const fetchPosts = async () => {
			
			const res = await axios.get(
				"posts/timeline/61bc1e652437bf9f8b1391e1"
			);
			console.log(res.data);
			setPosts(res.data);
		};
		fetchPosts();
	}, []);
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{posts.map((p) => {
					return <Post key={p._id} post={p} />;
				})}
			</div>
		</div>
	);
}
