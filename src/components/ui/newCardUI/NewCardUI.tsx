import styles from './newCardUI.module.css';
export const NewCardUI = () => {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_circle}>
                <span className={styles.card_plus}>+</span>
            </div>
        </div>
    );
};