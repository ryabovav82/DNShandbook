import {ProfilePageUI} from "../ui/profile-pageUI/ProfilePageUI.tsx";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../services/slices/userSlice.ts";
import {AppDispatch} from "../../services/store.ts";

export const ProfilePage = () => {

    const dispatch: AppDispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUser());
    }

    return <ProfilePageUI logoutHandler={logoutHandler}/>
}