import {CardUI} from "../ui/cardUI/CardUI.tsx";

export const Card = ({id, menuItemId, cardIndex, image, text, cardClickHandler}) => {
    return (
        <CardUI id={id} menuItemId={menuItemId} cardIndex={cardIndex} image={image} text={text} cardClickHandler={cardClickHandler}/>
    );
};