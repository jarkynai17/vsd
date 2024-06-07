
import React, { useState } from "react"

export const AudioContext = React.createContext();

const audio = new Audio();

const AppContext = (props) => {
    const [currentTrack, setCurrentTract] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const setAudio = (track) => {
        if (currentTrack?.id !== track.id){
            setCurrentTract(track)
            audio.src = track.src;
            audio.play();
            setIsPlaying(true)
            return
        }
        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play();
            setIsPlaying(true)
        }
    }

    const setSearchText = () => {
        console.log(name);  
    }

    const value = {
        text: "Music App",
        setAudio,
        audio,
        currentTrack,
        isPlaying,
        // audio
    }
    return (
        <AudioContext.Provider value={value}>
            {props.children}
        </AudioContext.Provider>
    )
}

export default AppContext