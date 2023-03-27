import React from 'react';

const styles = {
    background: {
        background: 'rgb(191, 208, 212)',
        color: 'rgb(246, 246, 237)'
    }
};

export default function Header() {
    return (
        <div style={styles.background}>
            <h1 class="text-center m-0 p-1">Madeline Lowes</h1>
            
        </div>
    )
}