import {MenuItemFormUI} from "../ui/menuItemFormUI/MenuItemFormUI.tsx";
import {useEffect, useState} from "react";
import {addMenuItems, changeMenuItem, delMenuItem, setModalOpen} from "../../services/slices/menuItemSlice.ts";
import {AppDispatch, RootState, useDispatch, useSelector} from "../../services/store.ts";

export const MenuItemForm = ({buttonCloseHandler}) => {
    const dispatch: AppDispatch = useDispatch();
    const menuItemData = useSelector((state: RootState) => state.menuItemsReducer.menuItemData);
    const isNewMenuItem = useSelector((state: RootState) => state.menuItemsReducer.isNewMenuItem);
    const [inputText, setInputText] = useState('');
    const [selectedItem, setSelectedItem] = useState('other');

    useEffect(() => {
        setInputText(menuItemData.name);
        setSelectedItem(menuItemData.category);
    }, [menuItemData.category, menuItemData.name]);
    const handleSubmitTrue = (event) => {
        event.preventDefault();
        const data = {
            id: +(new Date()),
            menuItemIndex: 1,
            name: inputText,
            category: selectedItem,
            cards: []
        };
        dispatch(addMenuItems(data));
        buttonCloseHandler(setModalOpen(true));
    }

    const handleSubmitFalse = (event, id) => {
        event.preventDefault();
        const data = {
            id: id,
            name: inputText,
            category: selectedItem,
        };
        dispatch(changeMenuItem(data));
        buttonCloseHandler(setModalOpen(true));
    }

    const menuItemDelHandler = (id) => {
        dispatch(delMenuItem(id));
        dispatch(setModalOpen(false));
    }
    const setInputTextHandler = (event) => {
        setInputText(event.target.value);
    }
    const setSelectedItemHandler = (event) => {
        setSelectedItem(event.target.value)
    }

    return <MenuItemFormUI
        inputText={inputText}
        id={menuItemData.id}
        selectedItem={selectedItem}
        isNewMenuItem={isNewMenuItem}
        handleSubmitTrue={handleSubmitTrue}
        handleSubmitFalse={handleSubmitFalse}
        buttonCloseHandler={buttonCloseHandler}
        setInputTextHandler={setInputTextHandler}
        setSelectedItemHandler={setSelectedItemHandler}
        menuItemDelHandler={menuItemDelHandler}
    />
}