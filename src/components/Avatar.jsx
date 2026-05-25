import React, {useContext} from 'react';
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, setUser} = useContext(ShmitterContext)
    const handleAvatarClick = () => {
        const newAvatarUrl = prompt("Change your Avatar?")

        setUser({
            ...user,
            avatar: newAvatarUrl
        })
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