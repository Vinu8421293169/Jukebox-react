import React, { useEffect, useState } from "react";
import SongPlayer from "./songPlayer";

function PlayList(props) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > props.songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, props.index]);

  useEffect(() => {
    setCurrentSongIndex(props.index);
  }, [props.index]);

  return (
    <div className="App">
      <SongPlayer
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={props.songs}
      />
    </div>
  );
}

export default PlayList;
