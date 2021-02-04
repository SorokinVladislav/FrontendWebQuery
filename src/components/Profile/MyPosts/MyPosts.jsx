import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";

const maxLength = maxLengthCreator(10);

function AddNewPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} placeholder="Post message..." name="newPostText" validate={[required, maxLength]}/>
        </div>
        <button>App post</button>
    </form>;
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPOst"})(AddNewPostForm);

const MyPosts = React.memo(props => {

    let postsElements =
        props.posts.map(p => <Post  key={p.id} message={p.message} likes={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (<div className={s.postsBlock}>
            <h3> My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )
});

export default MyPosts;