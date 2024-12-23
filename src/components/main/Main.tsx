import {MainUI} from "../ui/main/MainUI.tsx";
import {useSelector} from "react-redux";
import {AppDispatch, RootState, useDispatch} from "../../services/store.ts";
import {useEffect, useState} from "react";
import {getCards} from "../../services/slices/cardSlice.ts";
import {Card} from "../card/Card.tsx";
import {ModalCard} from "../modal-card/ModalCard.tsx";
import {CardBig} from "../card-big/CardBig.tsx";
import {NewCard} from "../newCard/NewCard.tsx";

export const Main = () => {

    const isAuthenticated = true;
    const dispatch: AppDispatch = useDispatch();
    const selectedMenuItem = useSelector((state: RootState) => state.menuItemsReducer.isSelected);

    useEffect(() => {
        if (selectedMenuItem) dispatch(getCards(selectedMenuItem));
    }, [dispatch, selectedMenuItem]);

    const cardsState = useSelector((state: RootState) => state.cardReducer);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardProps, setCardProps] = useState({
        id: undefined,
        menuItemId: undefined,
        serialNumber: undefined,
        image: '',
        text: ''

    });

    const cardClickHandler = (card) => {
        setCardProps({id: card.id, menuItemId: card.menuItemId, serialNumber: card.serialNumber, image: card.image, text: card.text});
        setIsModalOpen(true);
    }

    const overlayClick = () => {
        setIsModalOpen(false);
    }

    const buttonCloseHandler = () => {
        setIsModalOpen(false);
    }

    const cards = cardsState.data.map((item) =>
        <Card
            key={item.id}
            id={item.id}
            menuItemId={item.menuItemId}
            serialNumber={item.serialNumber}
            image={item.image}
            text={item.text}
            cardClickHandler={cardClickHandler}
        />
    );

    return (
        <>
            {isModalOpen && (
                <>
                    <ModalCard overlayClick={overlayClick}/>
                    <CardBig
                        id={cardProps.id}
                        image={cardProps.image}
                        menuItemId={cardProps.menuItemId}
                        text={cardProps.text}
                        serialNumber={cardProps.serialNumber}
                        buttonCloseHandler={buttonCloseHandler}/>
                </>
                )}
            <MainUI cards={cards} />
        </>
    );
};