import styles from './menuItemUI.module.css';
export const MenuItemUI = ({id, name, category, clickHandler, itemEditHandler, isSelectedMenuItem}) => {

    return (
        <button className={styles.button_item} onClick={() => clickHandler({id: id})}>
            {id === isSelectedMenuItem ? (<div className={styles.ripple}></div>) : (<div className={styles.ripple_off}></div>)}
            <span className={styles.text}>{name}</span>
            <div className={styles.menuItem_edit} onClick={() => itemEditHandler({id, name, category})}>

            </div>
        </button>
    );
};