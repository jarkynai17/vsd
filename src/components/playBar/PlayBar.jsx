
import { useState, useEffect, useContext } from "react"
import { AudioContext } from "../../context/AppContext"
import { Container, IconButton, Box, Slider } from '@mui/material';
import { formatMMSS } from "../../helpers/formatMMSS";
import { FaPause, FaPlay } from "react-icons/fa";

const PlayBar = () => {
    const { currentTrack, isPlaying, audio } = useContext(AudioContext)
    const [value, setValue] = useState(0)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        let timer = setInterval(() => {
            let time = Math.floor(audio.curentTime)
            setValue(time)
            console.log('tik');
        }, 1000)

        if (isPlaying == false) {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [isPlaying])

    return (
        <div style={{
            position: 'fixed',
            width: '100%',
            left: 0,
            bottom: 0,
            height: 150,
            background: "#fff",
            display: 'flex',
            alignItems: 'center'
        }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>{isPlaying ? <FaPause /> : <FaPlay />}</IconButton>
                    <img width={80} style={{padding: 6, borderRadius: 20}} src={currentTrack.preview} alt="" />
                    <div>
                        <h4>{currentTrack.artists}</h4>
                        <p>{currentTrack.title}</p>
                    </div>
                    <p style={{ width: 100 }}> {formatMMSS(value)}</p>
                    <Slider onChange={(_, v) => {
                        // secund = 194
                        // time = (v50% / 100) * 194 
                        console.log(v, '%');
                        setPercent(v)
                    }} value={percent} min={0} max={100} />
                    <p style={{ width: 100 }}>{formatMMSS(currentTrack.duration)}</p>
                </Box>

            </Container>
            PlayBar</div>
    )
}

export default PlayBar