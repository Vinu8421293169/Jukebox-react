import React from "react";
import { Box, Button, List, ListItem } from "@material-ui/core";
import { useState } from "react";
import PlayList from "./playList";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function App() {
  const songs = [
    {
      id: 1,
      title: "forget me too ft. Halsey",
      artist: "Machine Gum Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/On and On_320(PaglaSongs).mp3"
    },
    {
      id: 2,
      title: "Somebody New",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/Somebody New.mp3"
    },
    {
      id: 3,
      title: "On and On",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/On and On(PaglaSongs).mp3"
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/Somebody New.mp3"
    },
    {
      id: 5,
      title: "boyfriend",
      artist: "Justin Bieber",
      img_src:
        "https://i0.wp.com/ytimg.googleusercontent.com/vi/4GuqB1BQVr4/mqdefault.jpg?resize=320,180",
      src: "./music/Justin_Bieber_-_Boyfriend_Emvidowealth.com.mp3"
    }
  ];

  const [playList, setPlayList] = useState([]);
  const [index, setIndex] = useState([]);

  const addToPlayList = (index) => {
    setPlayList((prevList) => [...prevList, songs[index]]);
  };

  const clearPlayList = () => {
    setPlayList([]);
  };

  return (
    <Box display="flex">
      <Box width="30%" color="gray">
        <h3>Click Song to add into PlayList</h3>
        <div>
          <List>
            {songs.map((song, index) => {
              return (
                <ListItem
                  className="song"
                  onClick={() => addToPlayList(index)}
                  button="true"
                >
                  <MusicNoteIcon />
                  {song.title}
                </ListItem>
              );
            })}
          </List>
        </div>
        <h3>PlayList</h3>
        <div>
          <List>
            {playList.map((ele, idx) => (
              <ListItem className="song" onClick={() => setIndex(idx)}>
                <MusicNoteIcon />
                {ele.title}
              </ListItem>
            ))}
          </List>
        </div>
        <Button onClick={clearPlayList}>Clear All</Button>
      </Box>
      <Box width="70%">
        <PlayList songs={playList} index={index} />
      </Box>
    </Box>
  );
}

export default App;
