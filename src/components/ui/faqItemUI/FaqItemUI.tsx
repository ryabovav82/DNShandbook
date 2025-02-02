import styles from './faqItem.module.css';
export const FaqItemUI = ({id, title, text, date}) => {
    return (
        <li className={styles.container}>
            <div className={styles.faq_question}>
                <p>{title}</p>
                <p className={styles.faq_date}>{date}</p>
            </div>
            <label>
                <input className={styles.check} type='checkbox'/>
                <div className={styles.faq_answer}>
                    <pre>{text}</pre>
                </div>
            </label>
        </li>
    )
}