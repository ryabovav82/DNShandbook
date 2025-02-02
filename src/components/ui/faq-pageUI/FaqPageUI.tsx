import styles from './faqPage.module.css';
import {FaqItemForm} from "../../faqItemForm/FaqItemForm.tsx";
import {ModalCard} from "../../modal-card/ModalCard.tsx";
export const FaqPageUI = ({faqArray, createNewFaqHandler, isModalOpen, overlayClick, buttonCloseHandler, id, title, text}) => {
    return (
        <div className={styles.faq_page}>
            <div className={styles.container}>
                {isModalOpen && (
                    <div>
                        <ModalCard overlayClick={overlayClick}/>
                        <FaqItemForm buttonCloseHandler={buttonCloseHandler} id={id} title={title} text={text}/>
                    </div>
                )}
                <div className={styles.search_wrapper}>
                    <input className={styles.search} type='text' placeholder='поиск по FAQ'/>
                </div>
                <ul className={styles.items_wrapper}>
                    <li className={styles.faq_new}>
                        <button className={styles.faq_circle} onClick={() => createNewFaqHandler()}>
                            +
                        </button>
                    </li>
                    {faqArray}
                </ul>
            </div>
        </div>
    )
}