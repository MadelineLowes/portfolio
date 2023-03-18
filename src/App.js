import './App.css'
import { Routes, Route } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="">
            <Nav />
            <Routes>
              <Route path='/' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/resume' element={<Resume/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;