import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"

export default function SongDetails() {
  const {id} = useParams();
  const[song, setSong] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:3001/songs")
    .then(res => res.json()
    .then(data => setSong(data)))
  },[id])

  if(!song) return <p>Loading song....</p>
  return (
    <div className="page">
      <h2>{song.title}</h2>
      <p>Artist:{song.artist}</p>
      <p>ID:{song.id}</p>
    </div>
  );
}
