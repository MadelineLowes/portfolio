import React from 'react';
import '../style/Resume.css';


const styles = {
    background: {
        background: 'rgb(223, 219, 205)',
        overflow: 'scroll'
    },
    text: {
        color: 'rgb(75, 75, 75)'
    },
    list: {
        background: 'rgb(223, 219, 205)'
    }
};

export default function Resume() {
    return (
        <div className="m-0 p-1 h-100" style={styles.background}>
            <h2 className="text-center p-5" style={styles.text}>Resume</h2>
            <div className="container pb-5 mb-5">
                <a className="resume" href="https://drive.google.com/file/d/1Zd8GF8Heux3HuDFARY3xMcT1RunR1Hjx/view?usp=sharing">View My Resume</a>
                <div>
                    <div className="m-3 p-3">
                        <h3>Front-end Proficiencies</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={styles.list}>Bootstrap</li>
                            <li className="list-group-item" style={styles.list}>CSS</li>
                            <li className="list-group-item" style={styles.list}>HTML</li>
                            <li className="list-group-item" style={styles.list}>JavaScript</li>
                            <li className="list-group-item" style={styles.list}>jQuery</li>
                            <li className="list-group-item" style={styles.list}>React</li>
                            <li className="list-group-item" style={styles.list}>responsive design</li>
                        </ul>
                    </div>

                    <div className="m-3 p-3">
                        <h3>Back-end Proficiencies</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={styles.list}>APIs</li>
                            <li className="list-group-item" style={styles.list}>Express</li>
                            <li className="list-group-item" style={styles.list}>GraphQL</li>
                            <li className="list-group-item" style={styles.list}>MongoDB, Mongoose</li>
                            <li className="list-group-item" style={styles.list}>MySQL, Sequelize</li>
                            <li className="list-group-item" style={styles.list}>Node</li>
                            <li className="list-group-item" style={styles.list}>REST</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}