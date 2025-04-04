import {Routes, Route} from "react-router-dom"
import './App.scss'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/songs" element={<Songs/>}/>
        <Route path="/songs/:id" element={<SongDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
