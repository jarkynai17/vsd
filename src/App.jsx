
import React, { useContext } from "react"
import { AudioContext } from "./context/AppContext";
import MusictList from './components/MusicList/MusictList';
import Searchinput from "./components/Searchinput/Searchinput";

const App = () => {
  const value = useContext(AudioContext)
  return(
    <div>
      <h1 style={{ textAlign: 'center'}}>{value.text}</h1>
      <Searchinput/>
      <MusictList/>
      </div>
  )
}

export default App