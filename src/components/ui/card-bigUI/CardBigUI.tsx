import styles from './cardBigUI.module.css';
export const CardBigUI = (
    {
        id,
        text,
        buttonCloseHandler,
        inputText,
        inputTextChange,
        arrowDownHandler,
        arrowUpHandler,
        handleChangeImage,
        editedImage,
        clickSaveHandlerNew,
        isNewCard,
        clickSaveHandlerEdit,
        serialNumberText,
        clickDelHandler
    }
) => {
    const isAuthenticated = true

    return (
        <div className={styles.card}>
            <button className={styles.button_close} onClick={() => buttonCloseHandler()}>
                ×
            </button>
            {isAuthenticated && (
                <div className={styles.card_menu}>
                    <button
                        className={`${styles.card_menu_button} ${styles.card_menu_button_save}`}
                        onClick={isNewCard ? (() => clickSaveHandlerNew()) : () => clickSaveHandlerEdit(id)}
                    ></button>
                    <button onClick={() => clickDelHandler(id)} className={`${styles.card_menu_button} ${styles.card_menu_button_delete}`}></button>
                </div>
            )}
            <div className={styles.image_wrapper}>
                <div className={styles.card_serial}>
                    <span className={styles.card_serial_text}>{serialNumberText}</span>
                    {isAuthenticated && (
                        <>
                            <button className={styles.card_arrow_up} onClick={() => arrowUpHandler(serialNumberText)}>▲</button>
                            <button className={styles.card_arrow_down} onClick={() => arrowDownHandler(serialNumberText)}>▼</button>
                        </>
                    )}
                </div>
                <img
                    className={styles.card_image}
                    src={editedImage}
                    alt={id}
                />
                <label className={styles.card_add_image}>
                    <input
                        className={styles.main_base_card_img_input}
                        type='file'
                        accept='image/*'
                        onChange={(event) => handleChangeImage(event)}
                    />
                </label>
            </div>
            <div className={styles.text_wrapper}>
                {isAuthenticated ? (
                    <textarea
                        className={styles.card_text_input}
                        value={inputText}
                        onChange={(event) => inputTextChange(event)}/>
                ) : (
                        <span className={styles.card_text}>{text}</span>
                    )}
            </div>
        </div>
    );
};