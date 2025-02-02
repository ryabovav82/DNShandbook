import styles from './registerPageUI.module.css';
import {Link} from "react-router-dom";
export const RegisterPageUI = ({registerSubmit, userName, setUserName, email, setEmail, password, setPassword}) => {
    return (
        <div className={styles.container}>
            <div className={styles.info_wrapper}>
                <form onSubmit={(event) => registerSubmit(event)}>
                    <h2 className={styles.register_title}>Регистрация</h2>
                    <div className={styles.register_button_wrapper}>
                        <label className={styles.register_label_name}>
                            <input
                                className={styles.register_input}
                                type='text'
                                value={userName}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.register_button_wrapper}>
                        <label className={styles.register_label}>
                            <input
                                className={styles.register_input}
                                type='email' value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.register_button_wrapper}>
                        <label className={styles.register_label_pass}>
                            <input
                                className={styles.register_input}
                                type='password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.register_button_wrapper}>
                        <button className={styles.register_submit}>Зарегистрироваться</button>
                    </div>
                    <div className={styles.register_text_wrapper}>
                        <span>Уже зарегистрированы? <Link to='/login'><span className={styles.register_registration}> Войти</span></Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};