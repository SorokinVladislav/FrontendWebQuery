import React from 'react'
import s from './ProfileInfo.module.css'
import Preloder from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloder/>
    }

    return <div>
    <div>
        <img width={400}
            src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
    </div>
    <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt=""/>
        <div>{profile.aboutMe}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <div>{profile.fullName}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

    </div>
    </div>
};
export default ProfileInfo;