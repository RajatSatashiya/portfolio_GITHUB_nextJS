import React from "react";
import { userProfile } from "@/Resources/GithubUserData";

function Profile() {

  return (
    <div className="profile">
      <div className="profile-left">
        <p>Hola!, Soy</p>
        <h3>{userProfile.name}</h3>
        <div className="bio">{userProfile.bio}</div>
        <div className="skills">
          ReactJS | Javascript | Java | NodeJS | MongoDB | MySQL | CSS3 |
          ReactNative | NLP | Python
        </div>
      </div>
      <div className="profile-right">
        <img
          src={userProfile.avatar_url}
          alt="user profile"
          className="profilepic"
        />
        <div>@{userProfile.login}</div>
        <button className="btn">{userProfile.location}</button>
        <button className="btn">{userProfile.followers} followers</button>
        <button className="btn">{userProfile.following} following</button>
      </div>
    </div>
  );
}

export default Profile;
