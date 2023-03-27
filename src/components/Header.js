import React from 'react';
import '../style/Header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    background: {
        background: 'rgb(191, 208, 212)',
        color: 'rgb(246, 246, 237)'
    }
};

export default function Footer() {
    return (
        <div style={styles.background}>
            <h1 class="text-center m-0 p-1">Madeline Lowes</h1>
            
        </div>
    )
}