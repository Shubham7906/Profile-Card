import React from "react";
import './UserProfile.css'
import profile_icon from '../Assets/Elon.jpg';

const UserProfile = () => {
    return(
        <div className="upc">
        <div className="gradient"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Elon Musk</div>
            <div className="profile-description">Elon Musk is the CEO of Tesla. He's also cofounder other major companies, including SpaceX. He was born in South Africa and founded his first startup in the '90s.
            </div>
            <div className="profile-button"><a href="mailto:elon@musk">Contact Me</a></div>
        </div>
        </div>
    )
}

export default UserProfile;