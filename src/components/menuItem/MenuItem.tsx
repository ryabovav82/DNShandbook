import {MenuItemUI} from "../ui/menuItemUI/MenuItemUI.tsx";
import {TCard, TMenuItems} from "../../utils/types.ts";
import {AppDispatch, RootState, useDispatch} from "../../services/store.ts";
import {useEffect} from "react";
import {getMenuItems, setSelectedMenuItem} from "../../services/slices/menuItemSlice.ts";
import {useSelector} from "react-redux";
import {getCardsApi} from "../../utils/handbook-api.ts";



export type TMenuItemProps = {
    id: number;
    menuItemIndex: number;
    name: string;
    category: string;
    cards: TCard[];
}
export const MenuItem = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenuItems());
    }, [dispatch]);

    const clickHandler = ({id: id}) => {
        dispatch(setSelectedMenuItem(id));
    }

    const menuItemsState = useSelector((state: RootState) => state.menuItemsReducer);
    const result = menuItemsState.data.map((item: TMenuItems) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            menuItemIndex={item.menuItemIndex}
            name={item.name}
            category={item.category}
            cards={item.cards}
            clickHandler={clickHandler}
        />);

    return (
        <>
            {result}
        </>
    );
};