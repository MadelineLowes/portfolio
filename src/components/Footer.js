import React from 'react';

const styles = {
    background: {
        background: 'rgb(78, 115, 140)',
        color: 'rgb(246, 246, 237)'
    },
    links: {
        color: 'rgb(246, 246, 237)'
    }
};

export default function Footer() {
    return (
        <div className="fixed-bottom" style={styles.background}>
            <h4 className="text-center mb-0 mt-4">Thanks for checking out my webpage!</h4>
            <nav className="d-flex justify-content-center">
                <address className="m-3">
                    <a href="https://github.com/MadelineLowes" className="text-decoration-none" style={styles.links}>GitHub</a>
                </address>
                <address className="m-3">
                    <a href="https://www.linkedin.com/in/madeline-lowes-b52632152/" className="text-decoration-none" style={styles.links}>LinkedIn</a>
                </address>
                <address className="m-3">
                    <a href="https://stackoverflow.com/users/21433922/madeline-lowes?tab=profile" className="text-decoration-none" style={styles.links}>stackoverflow</a>
                </address>
            </nav>
        </div>
    )
}