import {MainUI} from "../ui/main/MainUI.tsx";
import {useSelector} from "react-redux";
import {AppDispatch, RootState, useDispatch} from "../../services/store.ts";
import {useEffect, useState} from "react";
import {getCards, isNewCreateCard, setIsModalCardOpen} from "../../services/slices/cardSlice.ts";
import {Card} from "../card/Card.tsx";
import {ModalCard} from "../modal-card/ModalCard.tsx";
import {CardBig} from "../card-big/CardBig.tsx";

export const Main = () => {

    const isAuthenticated = true;
    const dispatch: AppDispatch = useDispatch();
    const selectedMenuItem = useSelector((state: RootState) => state.menuItemsReducer.isSelected);
    const isModalOpen = useSelector((state: RootState) => state.cardReducer.isModalCardOpen);

    useEffect(() => {
        if (selectedMenuItem) dispatch(getCards(selectedMenuItem));
    }, [dispatch, selectedMenuItem]);

    const cardsState = useSelector((state: RootState) => state.cardReducer);

    const [cardProps, setCardProps] = useState({
        id: 0,
        menuItemId: 0,
        cardIndex: 0,
        image: '',
        text: ''
    });

    const createNewCard = (selectedMenuItem) => {
        dispatch(isNewCreateCard(true));
        setCardProps({
            id: 1,
            menuItemId: selectedMenuItem,
            cardIndex: 0,
            image: 'http://localhost:3005/menuitem/card/images/1.jpg',
            text: 'Тут должен быть ваш текст'
        });
        dispatch(setIsModalCardOpen(true));
    }

    const cardClickHandler = (card) => {
        setCardProps({id: card.id, menuItemId: card.menuItemId, cardIndex: card.cardIndex, image: card.image, text: card.text});
        dispatch(isNewCreateCard(false));
        dispatch(setIsModalCardOpen(true));
    }

    const overlayClick = () => {
        dispatch(setIsModalCardOpen(false));
    }

    const buttonCloseHandler = () => {
        dispatch(setIsModalCardOpen(false));
    }

    const cards = cardsState.data.map((item) =>
        <Card
            key={item.id}
            id={item.id}
            menuItemId={item.menuItemId}
            cardIndex={item.cardIndex}
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
                        cardIndex={cardProps.cardIndex}
                        buttonCloseHandler={buttonCloseHandler}/>
                </>
                )}
            <MainUI cards={cards} createNewCard={createNewCard} selectedMenuItem={selectedMenuItem} />
        </>
    );
};