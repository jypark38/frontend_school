import { useState } from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Modal from "./components/Modal";
/**
 * 리액트 지원 이벤트

- onClick
- onChange
- onInput
- onFocus
- onMouseEnter
- onMouseLeave
 */

function App() {
  const user={
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(true);

  return(
    <>
      {login ? <Homepage setLogin={setLogin}/> : < Login infoUser={user} setLogin={setLogin} setModal={setModal} />}
      {modal || < Modal setModal={setModal}>
        <h2>사용 양관에 대해 말씀드립니다</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, dicta corrupti sed consequuntur sit voluptatem eos labore provident, ipsa quisquam libero iusto quibusdam quas unde aliquam voluptate iste aliquid sint?</p>
        <a href="#none">더 보기</a>
      </Modal>}
    </>
  )
}
export default App;
