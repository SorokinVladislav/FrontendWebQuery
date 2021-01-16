import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map((p) =>  <Post message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {props.addPost(newPostElement.current.value);
        newPostElement.current.value = "";
    }

    return (<div className={s.postsBlock}>
           <h3> My posts</h3>
            <div>
                <div>
            <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost} type='submit'>App post</button>
            </div>

            <div className={s.posts}>

                {postsElements}

            </div>

        </div>


    )
};
export default MyPosts;