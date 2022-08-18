import { useState } from 'react';
import './App.css';
import { Modal } from './Components/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="App">
      <button className='button--open' onClick={() => setModalActive(true)}>
        Open a modal window
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className='modal--header'>
          Modal title
        </div>
        <div className='modal--body'>
          Text
        </div>
        <div className='modal--footer'>
          <button className='button--close' onClick={() => setModalActive(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
