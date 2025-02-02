import styles from './headerUI.module.css';
import {NavLink} from "react-router-dom";
import {AppDispatch, useDispatch} from "../../../services/store.ts";
import {getUser} from "../../../services/slices/userSlice.ts";
export const HeaderUI = ({userName}) => {

    const dispatch: AppDispatch = useDispatch()
    const clickHandler = () => {
        dispatch(getUser());
    }

    return (
        <header className={styles.header}>
            <div>
                <span className={styles.logo}>DNS </span>
                <span className={styles.logo_name}>бизнес</span>
            </div>
            <div>
                <button onClick={clickHandler}>GET USERS</button>
            </div>

            <div className={styles.container_menu}>
                <NavLink to='/' className={({isActive}) => isActive ? styles.selected : styles.header_link}>
                    <p>главная</p></NavLink>
                <NavLink to='/faq' className={({isActive}) => isActive ? styles.selected : styles.header_link}>
                    <p>FAQ</p></NavLink>
                {
                    userName
                        ? <NavLink to='/profile' className={({isActive}) => isActive ? styles.selected : styles.header_link}><p>{userName}</p></NavLink>
                        : <NavLink to='/login' className={({isActive}) => isActive ? styles.selected : styles.header_link}><p>личный кабинет</p></NavLink>
                }

            </div>
        </header>
    );
};