import {NavigateUI} from "../ui/navigateUI/NavigateUI.tsx";
import {AppDispatch, RootState, useSelector} from "../../services/store.ts";
import {useDispatch} from "react-redux";
import {setIsNewMenuItem, setMenuItemData, setModalOpen} from "../../services/slices/menuItemSlice.ts";

export const Navigate = () => {

    const dispatch: AppDispatch = useDispatch();

    const isModalOpen = useSelector((state: RootState) => state.menuItemsReducer.modalOpen);
    const newMenuItemHandler = () => {
        dispatch(setMenuItemData({id: 0, name: '', category: 'other'}))
        dispatch(setModalOpen(true));
        dispatch(setIsNewMenuItem(true));
    }

    const overlayClick = () => {
        dispatch(setModalOpen(false));
        dispatch(setMenuItemData({id: 0, name: '', category: ''}))
    }

    const buttonCloseHandler = () => {
        dispatch(setMenuItemData({id: 0, name: '', category: ''}))
        dispatch(setModalOpen(false));
    }
    return <NavigateUI
        newMenuItemHandler={newMenuItemHandler}
        isModalOpen={isModalOpen}
        overlayClick={overlayClick}
        buttonCloseHandler={buttonCloseHandler}/>
}