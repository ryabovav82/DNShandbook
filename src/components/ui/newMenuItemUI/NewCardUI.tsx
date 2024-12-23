import styles from './newMenuItemUI.module.css';
export const NewMenuItemUI = ({newMenuItemHandler}) => {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_circle} onClick={() => newMenuItemHandler()}>
                <span className={styles.card_plus}>+</span>
            </div>
        </div>
    );
};