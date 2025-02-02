import {CardBigUI} from "../ui/card-bigUI/CardBigUI.tsx";
import {ChangeEvent, useState} from "react";
import {
    addCard,
    changeCardImage,
    changeCardText,
    delCard,
    setIsModalCardOpen
} from "../../services/slices/cardSlice.ts";
import {AppDispatch, RootState, useDispatch, useSelector} from "../../services/store.ts";
import {TCard} from "../../utils/types.ts";

export const CardBig = ({id, image, menuItemId, text, buttonCloseHandler, cardIndex}) => {
    const dispatch: AppDispatch = useDispatch();

    const [serialNumberText, setSerialNumberText] = useState<number>(cardIndex);
    const [inputText, setInputText] = useState<string>(text);
    const [editedImage, setEditedImage] = useState(image);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const isNewCard = useSelector((state: RootState) => state.cardReducer.isNewCard);

    const inputTextChange = (event) => {
        setInputText(event.target.value)
    }

    const arrowUpHandler = (index) => {
        setSerialNumberText(index + 1);
    }

    const arrowDownHandler = (index) => {
        setSerialNumberText(index - 1);
    }

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageUrl = reader.result as string;
                setSelectedFile(file);
                setEditedImage(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    const clickSaveHandlerNew = ()=> {
        const newId = +(new Date());
        const newCard: TCard = {
            id: newId,
            menuItemId: menuItemId,
            cardIndex: serialNumberText,
            image: `http://localhost:3005/menuitem/card/images/${newId.toString()}.jpg`,
            text: inputText,
        };
        dispatch(addCard(newCard));
        if (selectedFile) {
            dispatch(changeCardImage({ imageName: newCard.id.toString(), imageFile: selectedFile }));
        }
        dispatch(setIsModalCardOpen(false));
    }

    const clickSaveHandlerEdit = (id) => {
        if (selectedFile) {
            dispatch(changeCardImage({ imageName: id.toString(), imageFile: selectedFile }));
        }
        dispatch(changeCardText({menuItemId: menuItemId, id: id, text: inputText, cardIndex: serialNumberText}));
        dispatch(setIsModalCardOpen(false));
    }

    const clickDelHandler = (id) => {
        dispatch(delCard({menuItemId, id}));
        dispatch(setIsModalCardOpen(false));
    }

    return (
        <CardBigUI
            id={id}
            image={image}
            menuItemId={menuItemId}
            text={text}
            inputText={inputText}
            cardIndex={cardIndex}
            buttonCloseHandler={buttonCloseHandler}
            inputTextChange={inputTextChange}
            arrowDownHandler={arrowDownHandler}
            arrowUpHandler={arrowUpHandler}
            serialNumberText={serialNumberText}
            handleChangeImage={handleChangeImage}
            editedImage={editedImage}
            clickSaveHandlerNew={clickSaveHandlerNew}
            isNewCard={isNewCard}
            clickSaveHandlerEdit={clickSaveHandlerEdit}
            clickDelHandler={clickDelHandler}

        />
    );
};