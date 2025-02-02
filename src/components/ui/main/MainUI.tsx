import styles from './mainUI.module.css';
import {NewCard} from "../../newCard/NewCard.tsx";
export const MainUI = ({cards, createNewCard, selectedMenuItem}) => {
    const isAuthenticated = true;
    return (
        <main className={styles.main}>
            {cards}
            {!selectedMenuItem && (
                <div>
                    <h1>Hello my friend</h1>
                </div>
            )}
            {isAuthenticated && selectedMenuItem && (
                <NewCard createNewCard={createNewCard} selectedMenuItem={selectedMenuItem}/>
            )}
        </main>
    );
};