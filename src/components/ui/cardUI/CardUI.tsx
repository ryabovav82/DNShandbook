import styles from './cardUI.module.css';
export const CardUI = ({id: id, menuItemId: menuItemId, serialNumber: serialNumber, image: image, text: text, cardClickHandler: cardClickHandler}) => {
    const card = {id: id, menuItemId: menuItemId, serialNumber: serialNumber, image: image, text: text};
    return (
        <div className={styles.card} onClick={() => cardClickHandler(card)}>
            <div className={styles.image_wrapper}>
                <div className={styles.card_index}>
                    <span>{serialNumber}</span>
                </div>
                <img
                    className={styles.card_image}
                    src={image}
                    alt={id}
                />
            </div>
            <div className={styles.text_wrapper}>
                {text}
            </div>
        </div>
    );
};