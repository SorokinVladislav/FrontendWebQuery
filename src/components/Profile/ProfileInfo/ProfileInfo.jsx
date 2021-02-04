import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
import Preloder from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/m1000x1000.jpg'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloder/>
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit =  (formData) => {
    saveProfile(formData).then(() =>{setEditMode(false)});
    }

    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/>
            {!isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}

            {editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
                <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(true) }}/>}

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {!isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <b> Full name:</b> {profile.fullName}
        </div>

        <div>
            <b> About me:</b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>

        <div>
            <b> My professional skills:</b> {profile.lookingForAJobDescription}
        </div>

        <div>
            <b> About me:</b> {profile.aboutMe}
        </div>

        <div>
            <b> Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;