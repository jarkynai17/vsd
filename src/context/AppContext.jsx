
import React, { useState } from "react"

export const AudioContext = React.createContext();

const audio = new Audio();

const AppContext = (props) => {
    const [currentTrack, setCurrentTract] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [name, setName] = useState("")
    const [thema, setThema] = useState("white")

    const toggleThema = () => {
        if (thema === "white") {
            setThema("dark")
        } else if (thema === "dark") {
            setThema("white")
        }
    }

    const setAudio = (track) => {
        if (currentTrack?.id !== track.id) {
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

    const setSearchText = (name) => {
        console.log(name);
        setName(name)
    }

    const value = {
        toggleThema,
        thema,
        setSearchText,
        name,
        text: "Music App",
        setAudio,
        audio,
        currentTrack,
        isPlaying,
    }
    return (
        <AudioContext.Provider value={value}>
            {props.children}
        </AudioContext.Provider>
    )
}

export default AppContext