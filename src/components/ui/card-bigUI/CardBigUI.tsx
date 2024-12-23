import styles from './cardBigUI.module.css';
import {ChangeEvent, useState} from "react";
export const CardBigUI = (
    {
        id,
        image,
        text,
        buttonCloseHandler,
        inputText,
        inputTextChange,
        arrowDownHandler,
        arrowUpHandler,
        serialNumberText
    }
) => {
    const isAuthenticated = true

    const [editedImage, setEditedImage] = useState(image);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageUrl = reader.result as string;
                setSelectedFile(file);
                setEditedImage(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.card}>
            <button className={styles.button_close} onClick={() => buttonCloseHandler()}>
                ×
            </button>
            {isAuthenticated && (
                <div className={styles.card_menu}>
                    <button className={`${styles.card_menu_button} ${styles.card_menu_button_save}`}></button>
                    <button className={`${styles.card_menu_button} ${styles.card_menu_button_delete}`}></button>
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
                    src={image}
                    alt={id}
                />
                <label className={styles.card_add_image}>
                    <input
                        className={styles.main_base_card_img_input}
                        type='file'
                        accept='image/*'
                        onChange={handleChangeImage}
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