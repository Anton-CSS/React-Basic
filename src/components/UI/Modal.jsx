import React from 'react';

const Modal = ({children, visible, setVisible}) => {
    const classTitle = ['modal'];
    if(visible) classTitle.push('active');

    return (
        <div className={classTitle.join(' ')} onClick={() => setVisible(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    );
};

export default Modal;