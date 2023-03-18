import '../style/Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav id="navbar">
            <NavLink to='/' className="navlink"> About Me</NavLink>
            <NavLink to='/contact' className="navlink"> Contact</NavLink>
            <NavLink to='/portfolio' className="navlink"> Portfolio</NavLink>
            <NavLink to='/resume' className="navlink"> Resume</NavLink>
            <h1>Navigation Bar</h1>
        </nav>
    )
}