import styles from './cardUI.module.css';
export const CardUI = ({id, menuItemId, cardIndex, image, text, cardClickHandler}) => {
    const card = {id, menuItemId, cardIndex, image: image, text: text};
    return (
        <div className={styles.card} onClick={() => cardClickHandler(card)}>
            <div className={styles.image_wrapper}>
                <div className={styles.card_index}>
                    <span>{cardIndex}</span>
                </div>
                <img
                    className={styles.card_image}
                    src={image}
                    alt={id}
                />
            </div>
            <div className={styles.text_wrapper}>
                <pre>{text}</pre>
            </div>
        </div>
    );
};