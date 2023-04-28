import React from 'react';

const styles = {
    background: {
        background: 'rgb(246, 232, 226)',
        overflow: 'scroll'
    },
    border: {
        border: '3px solid rgb(246, 246, 237)'
    },
    text: {
        color: 'rgb(75, 75, 75)'
    }
}

export default function About() {
    return (
        <div className="h-100" style={styles.background}>
            <h2 className="pt-5" style={styles.text}>About Me</h2>
            <div className="d-sm-flex justify-content-evenly align-items-center">
                <div className="col-sm-6 col-md-6">
                    <div className="container my-3" style={styles.text}>
                        <h3>Full Stack Coding Bootcamp Student</h3>
                        <h4>Graduating April 2023</h4>
                        <p>elevator pitch will go here</p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-2 mx-3 px-3">
                    <img className="img-fluid rounded-circle" src={'4.png'} alt="Madeline"></img>
                </div>
            </div>
            <div className="container pb-5 mb-5">
            <div className="pt-2 px-1 my-5" style={styles.border}>
                <p>As a recent graduate of a full-stack web development bootcamp, I have gained experience building web applications using a variety of technologies. My portfolio showcases projects that demonstrate my proficiency in HTML, CSS, JavaScript, React, Node.js, and SQL. I am particularly proud of my work on [specific project names], which highlight my ability to work both independently and as part of a team. I am eager to continue learning and growing as a developer, and I am excited about the opportunities that lie ahead.</p>
            </div>
            </div>
        </div>
    )
}