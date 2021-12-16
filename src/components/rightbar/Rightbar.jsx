import "./rightbar.css";
import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
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
					{Users.map((u)=>{
						return <Online user={u} key={u.id}/>
					})}
				</ul>
			</div>
		</div>
	);
}
