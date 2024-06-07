import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { AudioContext } from "../../context/AppContext"

import { Box, Container, CircularProgress, Card, CardContent } from "@mui/material"

import { FaPause, FaPlay } from "react-icons/fa";
// import { TbPlayerPauseFilled } from "react-icons/tb";
import PlayBar from "../playBar/PlayBar";

const url = "https://665b0c8a003609eda45fa87a.mockapi.io/api/v1/tracks"

const MusictList = () => {
    const [songs, setSongs] = useState([])
    const { setAudio, currentTrack, isPlaying, name } = useContext(AudioContext)

    useEffect(() => {
        axios.get(url).then((response) => {
            console.log(response);
            setSongs(response.data)
        })
    }, [])

    if (songs.length === 0) {
        return <Container maxWidth="md">
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        </Container >
    }

    return (
        <div>
            <Container style={{ display: 'flex', justifyContent: 'center', }} maxWidth="md">
                <Card style={{ padding: 40, borderRadius: 20, }}>
                    <CardContent>
                        {songs.filter(el => el.artists.toLowerCase().includes(name.toLowerCase())).map((track) => {
                            const min = Math.floor(track.duration / 60)
                            const remainderSecund = Math.floor(track.duration % 60)
                            return (

                                <div key={track.id} style={{ display: 'flex', gap: 50, alignItems: 'center' }}>
                                    <button style={{height:40,padding:15,alignItems:'center',justifyContent:'center',Color:"#436ee6",border:'none',borderRadius:50,}}
                                        onClick={() => {
                                            setAudio(track)
                                        }}>{currentTrack?.id === track.id ? <FaPause /> : <FaPlay /> }  
                                        {/* <TbPlayerPauseFilled /> */}
                                         </button>
                                    <img width={80} style={{ height: 60, marginBottom: 10, borderRadius: 20 }} src={track.preview} alt="" />
                                    <div>
                                        <h4>{track.title}</h4>
                                        <p>{track.artists}</p> && IsPlaying 
                                    </div>
                                    <p>{min} : {remainderSecund}</p>
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>

                {currentTrack && <PlayBar/>}
            </Container>
        </div>
    )
}

export default MusictList