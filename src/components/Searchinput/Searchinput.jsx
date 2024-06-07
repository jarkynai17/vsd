import { Container, TextField } from "@mui/material"
import { useContext } from "react"
import { AudioContext } from "../../context/AppContext"


const Searchinput = () => {
    const { setSearchText } = useContext(AudioContext)
    return(
        <Container maxWidth="md">
            <TextField
            fullWidth
            onChange={(evt) => {
                const text = evt.target.value
                setSearchText(text)
            }}
            sx={{ md: "10px"}}
            label="Search Music" variant="standard"/>
        </Container>
    )
}  

export default Searchinput