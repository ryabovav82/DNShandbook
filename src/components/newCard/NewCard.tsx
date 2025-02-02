import {NewCardUI} from "../ui/newCardUI/NewCardUI.tsx";

export const NewCard = ({createNewCard, selectedMenuItem}) => {
    return  <NewCardUI createNewCard={createNewCard} selectedMenuItem={selectedMenuItem}/>
}