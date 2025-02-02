import styles from './loginPageUI.module.css';
import {Link} from "react-router-dom";
export const LoginPageUI = ({email, setEmail, password, setPassword, loginSubmit}) => {
    return (
        <div className={styles.container}>
            <div className={styles.info_wrapper}>
                <form onSubmit={(event) => loginSubmit(event)}>
                    <h2 className={styles.login_title}>Вход</h2>
                    <div className={styles.login_button_wrapper}>
                        <label className={styles.login_label}>
                            <input
                                className={styles.login_input} type='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.login_button_wrapper}>
                        <label className={styles.login_label_pass}>
                            <input
                                className={styles.login_input}
                                type='password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.login_button_wrapper}>
                        <button className={styles.login_submit} type='submit'>Войти</button>
                    </div>
                    <div className={styles.login_text_wrapper}>
                        <span>Вы - новый пользователь? <Link to='/register'><span className={styles.login_registration}> Зарегистрироваться</span></Link>
                                </span>
                    </div>
                </form>
            </div>
        </div>
    );
};