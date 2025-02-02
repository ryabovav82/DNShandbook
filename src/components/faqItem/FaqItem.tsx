import {FaqItemUI} from "../ui/faqItemUI/FaqItemUI.tsx";


export const FaqItem = ({id, title, text}) => {
    const tempDate = new Date(id);
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth() + 1;
    const day = tempDate.getDate();
    const date = `${day}.${month}.${year}`;

    return <FaqItemUI id={id} title={title} text={text} date={date}/>
}