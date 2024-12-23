import {CardBigUI} from "../ui/card-bigUI/CardBigUI.tsx";
import {useState} from "react";

export const CardBig = ({id, image, menuItemId, text, buttonCloseHandler, serialNumber}) => {

    const [serialNumberText, setSerialNumberText] = useState(serialNumber);
    const [inputText, setInputText] = useState(text);

    const inputTextChange = (event) => {
        setInputText(event.target.value)
    }

    const arrowUpHandler = (serialNumber) => {
        setSerialNumberText(serialNumber + 1);
    }

    const arrowDownHandler = (serialNumber) => {
        setSerialNumberText(serialNumber - 1);
    }

    return (
        <CardBigUI
            id={id}
            image={image}
            menuItemId={menuItemId}
            text={text}
            inputText={inputText}
            serialNumber={serialNumber}
            buttonCloseHandler={buttonCloseHandler}
            inputTextChange={inputTextChange}
            arrowDownHandler={arrowDownHandler}
            arrowUpHandler={arrowUpHandler}
            serialNumberText={serialNumberText}

        />
    );
};