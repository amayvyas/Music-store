import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/songs")
    .then(res => res.json()
    .then(data => setSongs(data)))
  },[])
  return (
    <div>
      <h2>SONGS</h2>
      <ul>
        {songs.map(song =>(<li key={songs.id}><Link to={`/songs/${song.id}`}>{song.title} - {song.artist}</Link>
        </li>))}
      </ul>
    </div>
  );
}
