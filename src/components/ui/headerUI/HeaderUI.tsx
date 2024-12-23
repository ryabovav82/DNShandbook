import styles from './headerUI.module.css';
export const HeaderUI = () => {
    return (
        <header className={styles.header}>
            <div>
                <span className={styles.logo}>DNS </span>
                <span className={styles.logo_name}>бизнес</span>
            </div>

            <div className={styles.container_menu}>
                <p>главная</p>
                <p>FAQ</p>
                <p>личный кабинет</p>
            </div>
        </header>
    );
};