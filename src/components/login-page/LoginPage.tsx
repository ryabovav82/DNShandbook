import {LoginPageUI} from "../ui/login-pageUI/LoginPageUI.tsx";
import {AppDispatch, useDispatch} from "../../services/store.ts";
import {useState} from "react";
import {login} from "../../services/slices/userSlice.ts";

export const LoginPage = () => {

    const dispatch: AppDispatch = useDispatch();

    const[email, setEmail] = useState('ryabovav82@yandex.ru');
    const[password, setPassword] = useState('1366');

    const loginSubmit = (event) => {
        event.preventDefault();
        dispatch(login({email, password}))
    }

    return <LoginPageUI
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginSubmit={loginSubmit}
    />
}