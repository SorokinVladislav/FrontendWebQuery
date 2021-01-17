import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (<div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
            <textarea onChange={onPostChange}
                      ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>App post</button>
            </div>

            <div className={s.posts}>

                {postsElements}

            </div>

        </div>


    )
};
export default MyPosts;