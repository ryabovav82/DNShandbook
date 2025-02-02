import styles from './faqItemFormUI.module.css';
export const FaqItemFormUI = ({buttonCloseHandler, title, text, setTitle, setText, faqSubmit}) => {
    return (
        <form className={styles.container} onSubmit={(event) => faqSubmit(event)}>
            <button className={styles.button_faq_close} onClick={() => buttonCloseHandler()}>
                ×
            </button>
            <div className={styles.faq_menu}>
                <button type='submit'
                        className={`${styles.faq_menu_button} ${styles.faq_menu_button_save}`}></button>
                <button type='button' onClick={() => faqDelHandler(id)}
                        className={`${styles.faq_menu_button} ${styles.faq_menu_button_delete}`}></button>
            </div>
            <div className={styles.faq_form_question}>
                <input
                    className={styles.input_question}
                    type='text'
                    placeholder='Тут должен быть вопрос'
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
                <p className={styles.faq_form_date}></p>
            </div>
            <div className={styles.faq_form_answer}>
                <textarea
                    className={styles.input_answer}
                    placeholder='Тут должен быть ваш ответ'
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                />
            </div>
        </form>
    );
};