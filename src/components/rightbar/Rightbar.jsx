import "./rightbar.css";
import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
	const HomeRightBar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img
						src="/assets/gift.png"
						className="birthdayImg"
						alt=""
					/>
					<span className="birthdayText">
						{" "}
						<b>Mridul day</b> and <b>3 Others</b> have Birthday
						Today{" "}
					</span>
				</div>
				<img src="/assets/ad.png" className="rightbarAd" alt="" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((u) => {
						return <Online user={u} key={u.id} />;
					})}
				</ul>
			</>
		);
	};

	const ProfileRightBar = () => {
		return (
			<>
				<h4 className="rightbarTitle">User Information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">City: </span>
						<span className="rightbarInfoValue">Damoh </span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">From: </span>
						<span className="rightbarInfoValue">Damoh </span>
					</div>

					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Relationship </span>
						<span className="rightbarInfoValue">Single </span>
					</div>
				</div>
				<h4 className="rightbarTitle">User Friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src="/assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="/assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="/assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="/assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="/assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="/assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="/assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<ProfileRightBar />
			</div>
		</div>
	);
}
