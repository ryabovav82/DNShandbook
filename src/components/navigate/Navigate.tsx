import {NavigateUI} from "../ui/navigateUI/NavigateUI.tsx";
import {useState} from "react";

export const Navigate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const newMenuItemHandler = () => {
        setIsModalOpen(true);
    }

    const overlayClick = () => {
        setIsModalOpen(false);
    }

    const buttonCloseHandler = () => {
        setIsModalOpen(false);
    }
    return <NavigateUI
        newMenuItemHandler={newMenuItemHandler}
        isModalOpen={isModalOpen}
        overlayClick={overlayClick}
        buttonCloseHandler={buttonCloseHandler}/>
}