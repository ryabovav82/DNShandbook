import {CardUI} from "../ui/cardUI/CardUI.tsx";

export const Card = ({id: id, menuItemId: menuItemId, serialNumber: serialNumber, image: image, text: text, cardClickHandler: cardClickHandler}) => {
    return (
        <CardUI id={id} menuItemId={menuItemId} serialNumber={serialNumber} image={image} text={text} cardClickHandler={cardClickHandler}/>
    );
};