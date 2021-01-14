import React from 'react'
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'></img>
               <h1> {props.message}</h1>
                <div>
            <span>Like - {props.likes}</span>
        </div>
    </div>

};
export default Post;