import React from "react";
import {createField, Input} from "../../common/FormControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Form, reduxForm} from "redux-form";
import {Contact} from "./ProfileInfo";

const ProfileDataForm = ({profile, isOwner, goToEditMode}) => {
    return <Form>
        <div>
            <button onClick={goToEditMode}>Save</button>
        </div>
        <div>
            <b> Full name:</b>{createField("Full name", "fullname", [], Input)}

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

      {/*  <div>
            <b> Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>*/}
    </Form>
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm