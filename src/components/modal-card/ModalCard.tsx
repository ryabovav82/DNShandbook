import styles from './modalCard.module.css';
export const ModalCard = ({overlayClick: overlayClick}) => {

    return (
        <div className={styles.modal_overlay} onClick={() => overlayClick()}>
        </div>
    );
};