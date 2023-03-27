import React from 'react';
import '../style/Nav.css';
import { NavLink } from 'react-router-dom';
// import { faWeight } from '@fortawesome/free-solid-svg-icons';

const styles = {
    background: {
        background: 'rgb(78, 115, 140)',
    }
};

export default function Nav() {
    return (
        <nav class="navbar navbar-expand" style={styles.background}>
            <div class="container-fluid d-flex justify-content-evenly">
                <NavLink to='/'> About Me</NavLink>
                <NavLink to='/portfolio'> Portfolio</NavLink>
                <NavLink to='/contact'> Contact</NavLink>
                <NavLink to='/resume'> Resume</NavLink>
            </div>
        </nav>
    )
}