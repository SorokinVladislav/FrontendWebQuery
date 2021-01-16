import React from 'react'
import s from './Friends.module.css'

const Friends = (props) => {
    return (
            <div>
                <div className={s.profile}>
                    <img className={s.img} src={props.ava} alt=""/>
                    <br/>
                    {props.name}
                </div>
            </div>
      )
};
export default Friends;