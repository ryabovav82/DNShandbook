import styles from './mainPageUI.module.css';
import {Navigate} from "../../navigate/Navigate.tsx";
import {Main} from "../../main/Main.tsx";
import {CategoryMenu} from "../../categoryMenu/CategoryMenu.tsx";
export const MainPageUI = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_container}>
                <CategoryMenu />
                <div className={styles.wrapper}>
                    <Navigate />
                    <Main />
                </div>
            </div>
        </main>
    );
};