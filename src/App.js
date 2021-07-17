import { useEffect, useState } from "react";
import Player from "./components/Player";
import Songs from "./songs";
 
function App() { 

  const [songs]=useState(Songs);
  const [currentSongIdx,setCurrentSongIdx]=useState(0);
  const [nxtSongIdx,setNxtSongIdx]=useState(currentSongIdx+1);
  useEffect(()=>{
    setNxtSongIdx(()=>{
      if(currentSongIdx===songs.length-1)
          return 0;
      return currentSongIdx+1;
    })
  },[currentSongIdx, songs.length]);
  return (
    <div className="App">
      <Player
        currentSongIdx={currentSongIdx}
        setCurrentSongIdx={setCurrentSongIdx}
       songs={songs}
       nxtSongIdx={nxtSongIdx}  />
    </div>
  ); 
}

export default App;
