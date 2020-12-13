import React from "react";

//icons
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

//button
import { Button } from "@material-ui/core";

function SongControls(props) {
  return (
    <div className="player-controls">
      <Button onClick={() => props.SkipSong(false)}>
        <SkipPreviousIcon />
      </Button>
      <Button onClick={() => props.setIsPlaying(!props.isPlaying)}>
        {props.isPlaying ? <PauseIcon /> : <PlayCircleFilledWhiteIcon />}
      </Button>
      <Button onClick={() => props.SkipSong()}>
        <SkipNextIcon />
      </Button>
    </div>
  );
}

export default SongControls;
