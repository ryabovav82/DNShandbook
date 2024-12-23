import styles from './menuItemFormUI.module.css';
export const MenuItemFormUI = ({inputText, selectedItem, handleSubmit, buttonCloseHandler, setInputTextHandler, setSelectedItemHandler}) => {

    return (
        <div className={styles.form_container}>
            <form onSubmit={(event) => handleSubmit(event)}>
                <button className={styles.button_close} onClick={() => buttonCloseHandler()}>
                    ×
                </button>
                <div className={styles.menuItem_menu}>
                    <button type='submit'
                            className={`${styles.menuItem_menu_button} ${styles.menuItem_menu_button_save}`}></button>
                    <button className={`${styles.menuItem_menu_button} ${styles.menuItem_menu_button_delete}`}></button>
                </div>
                <div className={styles.form_name}>
                    <label htmlFor="itemName">Наименование </label>
                    <input
                        className={styles.form_name_input}
                        name='itemName'
                        type='text'
                        onChange={(event) => setInputTextHandler(event)}
                        value={inputText}/>
                </div>
                <div className={styles.form_category}>
                    <label htmlFor="itemСategory">Категория </label>
                    <select
                        id="itemСategory"
                        name="itemСategory"
                        className={styles.form_name_change}
                        value={selectedItem}
                        onChange={event => setSelectedItemHandler(event)}
                    >
                        <option value="edo">ЭДО</option>
                        <option value="cards">Подарочные карты</option>
                        <option value="return">Возврат</option>
                        <option value="exchange">Обмен</option>
                        <option value="payment">Виды оплаты</option>
                        <option value="stamp">Доверенность, печать</option>
                        <option value="upd">Оформление УПД</option>
                        <option value="other">Другое</option>
                    </select>
                </div>
            </form>
        </div>
    );
};