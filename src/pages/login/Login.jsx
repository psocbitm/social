import React from "react";
import Feed from "../../components/feed/Feed";
import "./login.css";
export default function Login() {
	return (
		<>
			<div className="login">
				<div className="loginWrapper">
					<div className="loginLeft">
						<h3 className="loginLogo">Happy Lama</h3>
						<span className="loginDesc">
							Connect with your friends on Happy Lama
						</span>
					</div>
					<div className="loginRight">
						<div className="loginBox">
							<input placeholder="Email" className="loginInput" />
							<input
								placeholder="Password"
								className="loginInput"
							/>
							<button className="loginButton">Log In</button>
							<span className="loginForgot">Forgot Password</span>
							<button className="loginRegisterButton">
								Create A New Account
							</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Feed />
			</div>
		</>
	);
}
