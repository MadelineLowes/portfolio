import './style/App.css'
import { Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

export default function App() {
    return (
        <div class="App" >
            {/* class="container-fluid p-0 h-100" */}
            {/* class="vh-100" */}
            <div class="vh-100">
                <Header />
                <Nav />
                    <Routes>
                        <Route path='/' element={<About />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/resume' element={<Resume />} />
                    </Routes>
                <Footer />
            </div>
        </div>
    )
}