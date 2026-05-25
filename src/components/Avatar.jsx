import React, {useContext} from 'react';
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar} = useContext(ShmitterContext)

const handleAvatarClick = () => {
    const url = prompt("Change your Avatar?")
    changeAvatar(url)
}

    return (
     <img  className={`user-avatar ${size ?? ''}`}
          src={user.avatar}
          alt={user.name}
           onClick={handleAvatarClick}
           style={{ cursor: 'pointer' }}
     />
    );
};

export default Avatar;