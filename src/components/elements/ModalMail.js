import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sendMail from '../../utils/nodemailer';

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
};

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
};

export const ModalMail = ({ onSubmit, className, children, handleClose, show, closeHidden, ...props }) => {
  const localize = JSON.parse(localStorage.getItem('localize'));
  let mail,
    msg = '';

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]);

  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  };

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  };

  const stopProgagation = (e) => {
    e.stopPropagation();
  };

  const setMail = (value) => {
    mail = value;
  };

  const setMsg = (value) => {
    msg = value;
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    window.alert(localize.mailsubject);
    //Hacer esto en el lado del servidor
    sendMail(mail);
    sendMail(mail, msg);
    handleClose(e);
  };

  const classes = classNames('modal', show && 'is-active', 'modal-mail', className);

  return (
    <div {...props} className={classes} onClick={handleClose}>
      <div className="modal-inner" onClick={stopProgagation}>
        <div className="modal-header">
          <button className="modal-close" aria-label="close" onClick={handleClose}></button>
        </div>
        <div className="modal-content">
          <form {...props} onSubmit={submitEmail}>
            <div style={{ paddingBottom: '3%' }}>
              <span style={{ margin: '3%' }}>{localize.buttonContact}</span>
            </div>
            <div style={{ paddingTop: '3%' }}>
              <label htmlFor="email">{localize.mailmodal}</label>
            </div>
            <div>
              <input type="email" onChange={(event) => setMail(event.target.value)} style={{ margin: '2%', 'font-size': '16px' }} id="email" placeholder="name@example.com" />
            </div>
            <div style={{ paddingTop: '3%' }}>
              <label htmlFor="text">{localize.mailmodalmessage}</label>
            </div>
            <div>
              <textarea onChange={(event) => setMsg(event.target.value)} style={{ margin: '2%', 'font-size': '15px' }} rows="4" id="text" />
            </div>
            <div>
              <button style={{ margin: '6%' }} type="submit">
                {localize.mailmodalsubmit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ModalMail.propTypes = propTypes;
ModalMail.defaultProps = defaultProps;
export default ModalMail;
