
import React, { useContext } from "react"
import { AudioContext } from "./context/AppContext";
import MusictList from './components/MusicList/MusictList';
import Searchinput from "./components/Searchinput/Searchinput";
import { Container, IconButton } from "@mui/material";

const App = () => {
  const value = useContext(AudioContext)
  // const {theme} = useContext(AudioContext)
  return(
    <div className={value.thema}>
      <Container maxWidth="md">
        <IconButton onClick={value.toggleThema}>
          {value.thema}
        </IconButton>
      </Container>
      <h1 style={{ textAlign: 'center'}}>{value.text}</h1>
      <Searchinput/>
      <MusictList/>
      </div>
  )
}

export default App