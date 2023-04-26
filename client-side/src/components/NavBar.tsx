import '../styles/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <input type="checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-thoughts">My Thoughts</Link></li>
        <li><Link to="/add-my-thought">Add own thought</Link></li>
        <li><Link to="/about">About The App</Link></li>
        <li><Link to="/LoginPage">Login/LogOut</Link></li>
      </ul>
    </nav>

  );
}

export default NavBar;
