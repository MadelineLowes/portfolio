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
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
    
    return (
        <div class="m-0 p-1 h-100" style={styles.background}>
            <h2 class="text-center p-5" style={styles.text}>Resume</h2>
            <div class="container pb-5 mb-5">


                <button class="btn" onClick={onButtonClick}>
                    Download my resume
                    {/* downloadable resume here */}
                </button>
                <div>
                    <div class="m-3 p-3">
                        <h3>Front-end Proficiencies</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style={styles.list}>Bootstrap</li>
                            <li class="list-group-item" style={styles.list}>CSS</li>
                            <li class="list-group-item" style={styles.list}>HTML</li>
                            <li class="list-group-item" style={styles.list}>JavaScript</li>
                            <li class="list-group-item" style={styles.list}>jQuery</li>
                            <li class="list-group-item" style={styles.list}>React</li>
                            <li class="list-group-item" style={styles.list}>responsive design</li>
                        </ul>
                    </div>

                    <div class="m-3 p-3">
                        <h3>Back-end Proficiencies</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style={styles.list}>APIs</li>
                            <li class="list-group-item" style={styles.list}>Express</li>
                            <li class="list-group-item" style={styles.list}>GraphQL</li>
                            <li class="list-group-item" style={styles.list}>MongoDB, Mongoose</li>
                            <li class="list-group-item" style={styles.list}>MySQL, Sequelize</li>
                            <li class="list-group-item" style={styles.list}>Node</li>
                            <li class="list-group-item" style={styles.list}>REST</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}