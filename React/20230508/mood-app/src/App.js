import DisplayMood from "./Components/DisplayMood/DisplayMood";
import MenuList from "./Components/MenuList/MenuList";
import { useState } from 'react';

function App() {
  const [currentMood, setCurrentMood] = useState("");
  return (
    <div>
      <MenuList mood = {currentMood} onItemClick={setCurrentMood}/>
      <DisplayMood mood={currentMood}/>
    </div>
  );
}
export default App;
