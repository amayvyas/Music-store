import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/songs" className="link">Songs</NavLink>
    </nav>
  )
}

export default Navbar