import {FaqItemFormUI} from "../ui/faqItemFormUI/FaqItemFormUI.tsx";
import {AppDispatch, RootState, useDispatch, useSelector} from "../../services/store.ts";
import {useState} from "react";
import {addFaqItem, isFaqModalOpen} from "../../services/slices/faqSlice.ts";

export const FaqItemForm = ({buttonCloseHandler}) => {
    const dispatch: AppDispatch = useDispatch();

    const faqData = useSelector((state: RootState) => state.faqsReducer.newFaqData);
    const [title, setTitle] = useState<string>(faqData.title);
    const [text, setText] = useState<string>(faqData.text);

    const faqSubmit = (event) => {
        event.preventDefault();
        const data: {id: number, title: string, text: string} = {
            id: faqData.id,
            title: title,
            text: text
        }
        dispatch(addFaqItem(data));
        dispatch(isFaqModalOpen(false));
    }


    return <FaqItemFormUI
        buttonCloseHandler={buttonCloseHandler}
        title={title}
        text={text}
        setTitle={setTitle}
        setText={setText}
        faqSubmit={faqSubmit}
    />
}