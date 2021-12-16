import "./post.css";
import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
export default function Post({ post }) {
	//hooks
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(isLiked ? false : true);
	};

	const user = Users.filter((u) => u.id === post.userId);
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							src={user[0].profilePicture}
							className="postProfileImg"
							alt=""
						/>
						<span className="postUsername">{user[0].username}</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">
						{post?.desc}
						{/* question mark is here bcoz some post might not have any desc */}
					</span>
					<img src={post.photo} alt="Post" className="postImg" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="/assets/heart.png"
							onClick={likeHandler}
							alt=""
						/>
						<img
							className="likeIcon"
							src="/assets/like.png"
							onClick={likeHandler}
							alt=""
						/>
						<span className="postLikeCounter">
							{like} People Liked this.
						</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommonText">
							{post.comment} Comments
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
