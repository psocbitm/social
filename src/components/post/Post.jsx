import "./post.css";
import { MoreVert, SettingsSuggestRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";

// import { Users } from "../../dummyData";
export default function Post({ post }) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	//hooks
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`users/${post.userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, []);
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(isLiked ? false : true);
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<Link to={`profile/${user.username}`}>
							<img
								src={
									user.profilePicture ||
									"https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
								}
								className="postProfileImg"
								alt=""
							/>
						</Link>
						<span className="postUsername">{user.username}</span>
						<span className="postDate">
							<TimeAgo date={post.createdAt} />
						</span>
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
					<img src={post.img} alt="Post" className="postImg" />
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
