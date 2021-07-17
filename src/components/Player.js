import React, { useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import Details from "./Details";

export default function Player(props) {
    const aRef=useRef(null);
    const [isPlay,setIsPlay]=useState(false);
    useEffect(() => {
        if(isPlay)
            aRef.current.play()
        else
        aRef.current.pause()    
    })
    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIdx(() => {
                let temp = props.currentSongIdx;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIdx(() => {
                let temp = props.currentSongIdx;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }
  return (
    <div className="c-player">
      <audio src={props.songs[props.currentSongIdx].src} ref={aRef}></audio>
      <h4>Playing now</h4>
        <Details song={props.songs[props.currentSongIdx]}/>
        <Controls isPlaying={isPlay} setIsPlaying={setIsPlay} SkipSong={SkipSong} />
      <p>
        Next up: <span>{props.songs[props.nxtSongIdx].title} by {props.songs[props.nxtSongIdx].artist}</span>
      </p>
    </div>
  );
}
