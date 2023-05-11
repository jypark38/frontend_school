
import Hello from './components/Hello/Hello';
import NavBar from './components/NavBar/NavBar';
import EventForm from './components/Form/EventForm';
import ItemGenerator from './components/Form/ItemGenerator';
import { useState } from 'react';



function App() {

  const [datas, setDatas] = useState([])

  // datas 배열에 데이터를 추가하는 목적을 가지는 함수.
  const addData=(data)=>{
    setDatas([...datas,data])
  }

  console.log(datas)

  return (
    <>
      <Hello name="gary"/>
      <NavBar />
      <ItemGenerator datas={datas}/>
      <EventForm addData={addData}/>
    </>
  );
}
export default App;