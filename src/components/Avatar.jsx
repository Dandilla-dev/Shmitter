import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../features/user/userSlice.js";
import {changeAvatar} from "../features/user/avatarSlice.js";


const Avatar = ({size}) => {
    const avatar = useSelector(state => state.avatar);
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const newName = prompt('Enter new name');
                dispatch(changeName(newName));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    )
}

export default Avatar;