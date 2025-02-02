import styles from './menuItem.module.css';
import {MenuItemUI} from "../ui/menuItemUI/MenuItemUI.tsx";
import {TCard} from "../../utils/types.ts";
import {AppDispatch, RootState, useDispatch} from "../../services/store.ts";
import {useEffect, useRef} from "react";
import {
    getMenuItems,
    setIsNewMenuItem,
    setMenuItemData,
    setModalOpen,
    setSelectedMenuItem
} from "../../services/slices/menuItemSlice.ts";
import {useSelector} from "react-redux";
import {login} from "../../services/slices/userSlice.ts";



export type TMenuItemProps = {
    id: number;
    menuItemIndex: number;
    name: string;
    category: string;
    cards: TCard[];
}
export const MenuItem = () => {

    const edoRef = useRef(null);
    const cardsRef = useRef(null);
    const returnRef = useRef(null);
    const exchangeRef = useRef(null);
    const paymentRef = useRef(null);
    const stampRef = useRef(null);
    const updRef = useRef(null);
    const otherRef = useRef(null);

    const dispatch: AppDispatch = useDispatch();

    const menuItemsState = useSelector((state: RootState) => state.menuItemsReducer.data);

    const menuItemsEdo = menuItemsState.filter((item) => item.category === 'edo');
    const menuItemsCards = menuItemsState.filter((item) => item.category === 'cards');
    const menuItemsReturn = menuItemsState.filter((item) => item.category === 'return');
    const menuItemsExchange = menuItemsState.filter((item) => item.category === 'exchange');
    const menuItemsPayment = menuItemsState.filter((item) => item.category === 'payment');
    const menuItemsStamp = menuItemsState.filter((item) => item.category === 'stamp');
    const menuItemsUpd = menuItemsState.filter((item) => item.category === 'upd');
    const menuItemsOther = menuItemsState.filter((item) => item.category === 'other');

    const isSelectedMenuItem = useSelector((state: RootState) => state.menuItemsReducer.isSelected);
    const changeCategory = useSelector((state: RootState) => state.menuItemsReducer.category);

    useEffect(() => {
        switch(changeCategory) {
            case 'edo': edoRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'cards': cardsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'return': returnRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'exchange': exchangeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'payment': paymentRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'stamp': stampRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'upd': updRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'other': otherRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }, [changeCategory]);

    useEffect(() => {
        dispatch(getMenuItems());
    }, [dispatch]);

    const clickHandler = ({id: id}) => {
        dispatch(setSelectedMenuItem(id));
    }

    const itemEditHandler =({id, name, category}) => {
        dispatch(setIsNewMenuItem(false));
        dispatch(setMenuItemData({id, name, category}));
        dispatch(setModalOpen(true));
    }

    const resultEdo = menuItemsEdo.map((item) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            clickHandler={clickHandler}
            itemEditHandler={itemEditHandler}
            isSelectedMenuItem={isSelectedMenuItem}
        />);

    const resultCards = menuItemsCards.map((item) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            clickHandler={clickHandler}
            itemEditHandler={itemEditHandler}
            isSelectedMenuItem={isSelectedMenuItem}
        />);

    const resultReturn = menuItemsReturn.map((item) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            clickHandler={clickHandler}
            itemEditHandler={itemEditHandler}
            isSelectedMenuItem={isSelectedMenuItem}
        />);

    const resultExchange = menuItemsExchange.map((item) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            clickHandler={clickHandler}
            itemEditHandler={itemEditHandler}
            isSelectedMenuItem={isSelectedMenuItem}
        />);

    const resultPayment = menuItemsPayment.map((item) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            clickHandler={clickHandler}
            itemEditHandler={itemEditHandler}
            isSelectedMenuItem={isSelectedMenuItem}
        />);

    const resultStamp = menuItemsStamp.map((item) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            clickHandler={clickHandler}
            itemEditHandler={itemEditHandler}
            isSelectedMenuItem={isSelectedMenuItem}
        />);

    const resultUpd = menuItemsUpd.map((item) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            clickHandler={clickHandler}
            itemEditHandler={itemEditHandler}
            isSelectedMenuItem={isSelectedMenuItem}
        />);

    const resultOther = menuItemsOther.map((item) =>
        <MenuItemUI
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            clickHandler={clickHandler}
            itemEditHandler={itemEditHandler}
            isSelectedMenuItem={isSelectedMenuItem}
        />);


    return (
        <div className={styles.container}>
            <div ref={edoRef} className={styles.category_wrapper}>
                <br/>
                <span className={styles.category_text}>ЭДО</span>
                {resultEdo}
            </div>
            <div ref={cardsRef} className={styles.category_wrapper}>
                <br/>
                <span className={styles.category_text}>Подарочные карты</span>
                {resultCards}
            </div>
            <div ref={returnRef} className={styles.category_wrapper}>
                <br/>
                <span className={styles.category_text}>Возврат</span>
                {resultReturn}
            </div>
            <div ref={exchangeRef} className={styles.category_wrapper}>
                <br/>
                <span className={styles.category_text}>Замена</span>
                {resultExchange}
            </div>
            <div ref={paymentRef} className={styles.category_wrapper}>
                <br/>
                <span className={styles.category_text}>Виды оплат</span>
                {resultPayment}
            </div>
            <div ref={stampRef} className={styles.category_wrapper}>
                <br/>
                <span className={styles.category_text}>Доверенность, печать</span>
                {resultStamp}
            </div>
            <div ref={updRef} className={styles.category_wrapper}>
                <br/>
                <span className={styles.category_text}>Оформление УПД</span>
                {resultUpd}
            </div>
            <div ref={otherRef} className={styles.category_wrapper}>
                <br/>
                <span className={styles.category_text}>Другое</span>
                {resultOther}
            </div>
        </div>
    );
};