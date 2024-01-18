import ReactDOM from 'react-dom';
import Card from './Card';
import { IoIosClose } from 'react-icons/io';

const Modal = ({ children, onDismiss }) => {
  // Prevents the modal from closing when clicking on the modal content
  const cardClickHandler = event => {
    event.stopPropagation();
  };

  const content = (
    <div
      className='fixed inset-0 z-20 flex flex-row items-center justify-center
        backdrop-blur'
      onClick={onDismiss}>
      <Card
        className='animate-slideUp z-40 w-1/2 p-5 shadow-xl drop-shadow-xl'
        onClick={cardClickHandler}>
        <div className='flex flex-row justify-end'>
          <IoIosClose className='cursor-pointer text-2xl' onClick={onDismiss} />
        </div>
        {children}
      </Card>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal'));
};

export default Modal;
