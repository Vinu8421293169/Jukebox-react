import React, { useEffect, useRef, useState } from "react";
import PlayerDetails from "./playerDetails";
import SongControls from "./songControls";

function SongPlayer(props) {
  const audioEl = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwords = true) => {
    if (forwords) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="SongPlayer">
      <h4>Playing now</h4>
      <PlayerDetails song={props.songs[props.currentSongIndex] || ""} />
      <audio
        controls
        autoPlay="true"
        onEnded={SkipSong}
        src={
          props.songs[props.currentSongIndex]
            ? props.songs[props.currentSongIndex].src
            : ""
        }
        ref={audioEl}
      ></audio>
      <SongControls
        SkipSong={SkipSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
      <p>
        <strong>Next up:</strong>{" "}
        {props.songs[props.nextSongIndex]
          ? props.songs[props.nextSongIndex].title + " by "
          : ""}
        {props.songs[props.nextSongIndex]
          ? props.songs[props.nextSongIndex].artist
          : ""}
      </p>
    </div>
  );
}

export default SongPlayer;
