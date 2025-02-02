import {RegisterPageUI} from "../ui/register-pageUI/RegisterPageUI.tsx";
import {useState} from "react";
import {AppDispatch, useDispatch} from "../../services/store.ts";
import {register} from "../../services/slices/userSlice.ts";

export const RegisterPage = () => {

    const dispatch: AppDispatch = useDispatch();

    const [userName, setUserName] = useState('Andrey');
    const [email, setEmail] = useState('ryabovav82@yandex.ru');
    const [password, setPassword] = useState('1366');



    const registerSubmit = (event) => {
        event.preventDefault();
        dispatch(register({userName, email, password}));
    }

    return <RegisterPageUI
        registerSubmit={registerSubmit}
        userName={userName}
        email={email}
        password={password}
        setUserName={setUserName}
        setEmail={setEmail}
        setPassword={setPassword}
    />
}