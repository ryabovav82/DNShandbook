import styles from './navigateUI.module.css';
import {MenuItem} from "../../menuItem/MenuItem.tsx";
import {NewMenuItem} from "../../newMenuItem/NewMenuItem.tsx";
import {ModalCard} from "../../modal-card/ModalCard.tsx";
import {MenuItemForm} from "../../menuItemForm/MenuItemForm.tsx";
export const NavigateUI = ({newMenuItemHandler, isModalOpen, overlayClick, buttonCloseHandler}) => {
    const isAuthenticated = true;
    return (
        <nav className={styles.navigate}>
            {isAuthenticated && (
                <NewMenuItem newMenuItemHandler={newMenuItemHandler}/>
            )}
            {isModalOpen && (
                <>
                    <ModalCard overlayClick={overlayClick}/>
                    <MenuItemForm buttonCloseHandler={buttonCloseHandler}/>
                </>
                )}
            <MenuItem />
        </nav>
    );
};