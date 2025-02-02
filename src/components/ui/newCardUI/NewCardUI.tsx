import styles from './newCardUI.module.css';
export const NewCardUI = ({createNewCard, selectedMenuItem}) => {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_circle} onClick={() => createNewCard(selectedMenuItem)}>
                <span className={styles.card_plus}>+</span>
            </div>
        </div>
    );
};