import styles from './footerUI.module.css';
import {Link} from "react-router-dom";

export const FooterUI = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <Link to='tel:+79132383252' className={styles.phone}>
                    Тел. +7 (913) 238-32-52
                </Link>
                <div className={styles.footer_content_copyright}>
                    <div className={styles.copyright}>
                        <span className={styles.copyright_c}>C</span>
                    </div>
                    <span className={styles.year}>2024 Все права защищены</span>
                </div>
            </div>
        </footer>
    );
};