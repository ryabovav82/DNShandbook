import styles from './mainUI.module.css';
import {Card} from "../../card/Card.tsx";
import {NewCard} from "../../newCard/NewCard.tsx";
export const MainUI = ({cards: cards}) => {
    const isAuthenticated = true;
    return (
        <main className={styles.main}>
            {cards}
            {isAuthenticated && (
                <NewCard />
            )}
        </main>
    );
};