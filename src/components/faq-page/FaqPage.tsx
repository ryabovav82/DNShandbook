import {FaqPageUI} from "../ui/faq-pageUI/FaqPageUI.tsx";
import {AppDispatch, RootState, useDispatch} from "../../services/store.ts";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getFaqItems, isFaqModalOpen, isNewFaqItem, newFaqDataCreate} from "../../services/slices/faqSlice.ts";
import {FaqItem} from "../faqItem/FaqItem.tsx";


export const FaqPage = () => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(getFaqItems());
    }, [dispatch]);
    const faqState = useSelector((state: RootState) => state.faqsReducer);
    const faqArray = faqState.data.toReversed().map((item) => <FaqItem key={item.id} id={item.id} title={item.title} text={item.text}/>);

    const createNewFaqHandler = () => {
        const data = {
            id: +(new Date()),
            title: '',
            text: ''
        }
        dispatch(isNewFaqItem(true));
        dispatch(isFaqModalOpen(true));
        dispatch(newFaqDataCreate(data));

    }

    const overlayClick = () => {
        dispatch(isFaqModalOpen(false));
    }

    const buttonCloseHandler = () => {
        dispatch(isFaqModalOpen(false));
    }

    return <FaqPageUI
        faqArray={faqArray}
        createNewFaqHandler={createNewFaqHandler}
        isModalOpen={faqState.isModalOpen}
        overlayClick={overlayClick}
        buttonCloseHandler={buttonCloseHandler}
    />
}