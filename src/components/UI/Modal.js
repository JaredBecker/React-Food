import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => <div className={classes.backdrop} onClick={props.onClose}></div>

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return <>
        {createPortal(<Backdrop onClose={props.onHideCart} />, portalElement)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
};

export default Modal;
