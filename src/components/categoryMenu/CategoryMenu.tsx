import {CategoryMenuUI} from "../ui/categoryMenuUI/CatgoryMenuUI.tsx";
import {changeCategory} from "../../services/slices/menuItemSlice.ts";
import {AppDispatch, useDispatch} from "../../services/store.ts";

export const CategoryMenu = () => {
    const dispatch: AppDispatch = useDispatch();
    const categoryMenuHandler = (menuCategory: string) => {
        dispatch(changeCategory(menuCategory));
    }
    return (
        <CategoryMenuUI categoryMenuHandler={categoryMenuHandler}/>
    );
};