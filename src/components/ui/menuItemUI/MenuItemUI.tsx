import styles from './menuItemUI.module.css';
export const MenuItemUI = (
    {
        id: id,
        menuItemIndex: menuItemIndex,
        name: name,
        category:category,
        cards: cards,
        clickHandler: clickHandler
    }
    ) => {

    return (
        <button className={styles.button_item} onClick={() => clickHandler({id: id})}>
            <span>{name}</span>
            <div className={styles.menuItem_edit}>

            </div>
        </button>
    );
};