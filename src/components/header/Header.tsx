import {HeaderUI} from "../ui/headerUI/HeaderUI.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../services/store.ts";

export const Header = () => {

    const user = useSelector((state: RootState) => state.userReducer);

    return <HeaderUI userName={user.data.userName}/>
};