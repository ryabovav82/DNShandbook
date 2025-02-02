import styles from './categoryMenuUI.module.css';

export const CategoryMenuUI = ({categoryMenuHandler}) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => categoryMenuHandler('edo')}>ЭДО</button>
            <button className={styles.button} onClick={() => categoryMenuHandler('return')}>Возврат</button>
            <button className={ styles.button} onClick={() => categoryMenuHandler('exchange')}>Замена</button>
            <button className={ styles.button} onClick={() => categoryMenuHandler('cards')}>Подарочные карты</button>
            <button className={ styles.button} onClick={() => categoryMenuHandler('payment')}>Виды оплаты</button>
            <button className={ styles.button} onClick={() => categoryMenuHandler('upd')}>Оформление УПД</button>
            <button className={ styles.button} onClick={() => categoryMenuHandler('stamp')}>Доверенность, печать</button>
            <button className={ styles.button} onClick={() => categoryMenuHandler('other')}>Другое</button>
        </div>
    );
};