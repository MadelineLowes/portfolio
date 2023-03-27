import React from 'react';
import '../style/Portfolio.css';

const styles = {
    background: {
        background: 'rgb(191, 208, 212)',
        overflow: 'scroll'
    },
    button: {
        background: 'rgb(78, 115, 140)',
        color: 'rgb(246, 246, 237)'
    },
    text: {
        color: 'rgb(75, 75, 75)'
    },
    image: {
        width: '70%',
        margin: '6px',
    },
    card: {
        background: 'rgb(246, 246, 237)'
    },
};

export default function Portfolio() {
    return (
        <div class="text-center m-0 p-1" style={styles.background}>
            <h2 class="pt-5 pb-3" style={styles.text}>Portfolio</h2>

            <div class="d-flex flex-wrap justify-content-evenly pb-5 mb-5">
                <div class="col-lg-3 col-md-5 col-s-6 m-3">
                    <div class="card">
                        <div class="container m-0 p-0">
                            <img src={'sailboat-light.png'}
                                class="card-img-top mx-auto" style={styles.image} alt="movie logo" />
                            <div class="d-flex justify-content-evenly w-100 middle">
                                <button class="repo rounded p-3"><a href="https://github.com/Sophack/ShowBoat ">GitHub Repo</a></button>
                                <button class="deployed rounded p-3"><a href="https://sophack.github.io/firstGroupProject/"
                                    alt="Movie app link">Deployed App</a></button>
                            </div>
                        </div>
                        <details class="card-body" style={styles.card}>
                            <summary class="card-title">1st Group Project</summary>
                            <p class="card-text">
                                My group created an application that lets users know which streaming
                                platforms their searched movies and shows are on. There are direct links to
                                the streaming platforms from the results page, as well as information about
                                the searched movie/show, suggested similar titles, and the ability to store
                                your liked movie/show in a list for easier access at a later time. I lead
                                the javascript portion of this project, where I learned more & more quickly
                                than I thought possible. This was an amazing learning experience and has
                                taught me a lot!
                            </p>
                        </details>
                    </div>
                </div>

                <div class="col-lg-3 col-md-5 col-s-6 m-3">
                    <div class="card">
                        <div class="container m-0 p-0">
                            <img src={'bflogo.png'} class="card-img-top w-100" alt="bootcamp forum logo" />
                            <div class="d-flex justify-content-evenly w-100 middle">
                                <button class="repo rounded p-3"><a href="https://github.com/lavanyavirushan/p2-bootcamp-forum">GitHub Repo</a></button>
                                <button class="deployed rounded p-3"><a href="https://p2-bootcamp-forum.herokuapp.com/"
                                    alt="Movie app link">Deployed App</a></button>
                            </div>
                        </div>
                        <details class="card-body" style={styles.card}>
                            <summary class="card-title">2nd Group Project</summary>
                            <p class="card-text">
                                This application is a platform for past and present bootcamp students to
                                connect,
                                ask questions, mentor, and network with others going through the same
                                experience.
                                Unlike some other forums, even ones specifically for software development,
                                this
                                application is exclusively* for students in coding bootcamp programs,
                                allowing users
                                to have a much more personalized experience.
                            </p>
                        </details>
                    </div>
                </div>

                <div class="col-lg-3 col-md-5 col-s-6 m-3">
                    <div class="card">
                        <div class="container m-0 p-0">
                            <img src={'bizorg.png'}
                                class="card-img-top mx-auto" style={styles.image} alt="flowchart icon" />
                            <div class="d-flex justify-content-evenly w-100 middle">
                                <button class="repo rounded p-3"><a href="https://github.com/MadelineLowes/organize-my-business">GitHub Repo</a></button>
                                {/* <button class="deployed rounded p-3"><a href="https://sophack.github.io/firstGroupProject/" alt="Movie app link">Deployed App</a></button> */}
                            </div>
                        </div>
                        <details class="card-body" style={styles.card}>
                            <summary class="card-title">Organize My Business</summary>
                            <p class="card-text">
                                This application is a Content Management System (CMS), which is built using
                                Node.js,
                                and the MySQL2, inquirer, & console.table packages, to create, read, update,
                                and
                                delete information in a database. It is intended to be used by
                                employers/business
                                owners to be able to organize & store their company's departments, roles,
                                and
                                employees, to be better able to plan for & manage their business.
                            </p>
                        </details>
                    </div>
                </div>

                <div class="col-lg-3 col-md-5 col-s-6 m-3">
                    <div class="card">
                        <div class="container m-0 p-0">
                            <img src={'ecom.png'}
                                class="card-img-top mx-auto" style={styles.image} alt="ecom icon" />
                            <div class="d-flex justify-content-evenly w-100 middle">
                                <button class="repo rounded p-3"><a href="https://github.com/MadelineLowes/ecom-behind-the-screens">GitHub Repo</a></button>
                                {/* <button class="deployed rounded p-3"><a href="https://sophack.github.io/firstGroupProject/" alt="Movie app link">Deployed App</a></button> */}
                            </div>
                        </div>
                        <details class="card-body" style={styles.card}>
                            <summary class="card-title">Ecom Behind the Screens</summary>
                            <p class="card-text">
                                This application is built using Express.js the MySQL2, Sequelize, & dotenv
                                packages,
                                to create, read, update, and delete information in the database. The user
                                can access
                                the database by utilizing an application like Insomnia to execute GET, POST,
                                PUT,
                                and DELETE routes. It is intended to be used by employers/business owners of
                                an
                                internet retail company, who want to manage their e-commerce website using
                                the
                                latest backend technologies to make their company competitive.
                            </p>
                        </details>
                    </div>
                </div>

                <div class="col-lg-3 col-md-5 col-s-6 m-3">
                    <div class="card">
                        <div class="container m-0 p-0">
                            <img src={'readme.png'}
                                class="card-img-top mx-auto" style={styles.image} alt="readme icon" />
                            <div class="d-flex justify-content-evenly w-100 middle">
                                <button class="repo rounded p-3"><a href="https://github.com/MadelineLowes/madelines-readme-creator">GitHub Repo</a></button>
                                {/* <button class="deployed rounded p-3"><a href="https://github.com/MadelineLowes/madelines-readme-creator"alt="Movie app link">Deployed App</a></button> */}
                            </div>
                        </div>
                        <details class="card-body" style={styles.card}>
                            <summary class="card-title">ReadMe Creator</summary>
                            <p class="card-text">
                                This is an application that runs in the terminal using Node.js to allow users to create a high quality ReadMe file for their own application more easily and efficiently. The user is prompted for information about their application like their project title, description, installation instructions, etc. and once the user has completed their responses, the ReadMe file is created and populated with their inputted project information.
                            </p>
                        </details>
                    </div>
                </div>

                <div class="col-lg-3 col-md-5 col-s-6 m-3">
                    <div class="card">
                        <div class="container m-0 p-0">
                            <img src={'blog.png'}
                                class="card-img-top mx-auto" style={styles.image} alt="blog icon" />
                            <div class="d-flex justify-content-evenly w-100 middle">
                                <button class="repo rounded p-3"><a href="https://github.com/MadelineLowes/mvc-tech-blog">GitHub Repo</a></button>
                                <button class="deployed rounded p-3"><a href="https://sophack.github.io/firstGroupProject/"
                                    alt="Movie app link">Deployed App</a></button>
                            </div>
                        </div>
                        <details class="card-body" style={styles.card}>
                            <summary class="card-title">Tech Blog</summary>
                            <p class="card-text">
                                Coming Soon!
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    )
}