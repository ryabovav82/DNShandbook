import styles from './categoryMenuUI.module.css';

export const CategoryMenuUI = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>ЭДО</button>
            <button className={styles.button}>Возврат</button>
            <button className={ styles.button}>Обмен</button>
            <button className={ styles.button}>Подарочные карты</button>
            <button className={ styles.button}>Виды оплаты</button>
            <button className={ styles.button}>Оформление УПД</button>
            <button className={ styles.button}>Доверенность, печать</button>
            <button className={ styles.button}>Другое</button>
        </div>
    );
};