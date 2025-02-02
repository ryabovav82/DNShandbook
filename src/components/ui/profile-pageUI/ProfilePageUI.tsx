import styles from './profilePageUI.module.css';
export const ProfilePageUI = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <button onClick={() => logoutHandler()}>Выйти</button>
        </div>
    );
};