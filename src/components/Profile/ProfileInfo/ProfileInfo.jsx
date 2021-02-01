import React from 'react'
import s from './ProfileInfo.module.css'
import Preloder from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/m1000x1000.jpg'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloder/>
    }
const mainPhotoSelected = (e) =>{
       if (e.target.files.length){
           savePhoto(e.target.files[0]);
       }
}

    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/>
            {!isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
};
export default ProfileInfo;