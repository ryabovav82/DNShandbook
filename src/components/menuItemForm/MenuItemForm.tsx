import {MenuItemFormUI} from "../ui/menuItemFormUI/MenuItemFormUI.tsx";
import {useState} from "react";
import {addMenuItems} from "../../services/slices/menuItemSlice.ts";

export const MenuItemForm = ({buttonCloseHandler}) => {
    const [inputText, setInputText] = useState('');
    const [selectedItem, setSelectedItem] = useState('other');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: 1,
            menuItemIndex: 1,
            name: inputText,
            category: selectedItem,
            cards: []
        };
        addMenuItems(data);
        buttonCloseHandler();

    }
    const setInputTextHandler = (event) => {
        setInputText(event.target.value);
    }
    const setSelectedItemHandler = (event) => {
        setSelectedItem(event.target.value)
    }

    return <MenuItemFormUI
        inputText={inputText}
        selectedItem={selectedItem}
        handleSubmit={handleSubmit}
        buttonCloseHandler={buttonCloseHandler}
        setInputTextHandler={setInputTextHandler}
        setSelectedItemHandler={setSelectedItemHandler} />
}