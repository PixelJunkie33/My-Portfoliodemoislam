import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/Shared/Footer';
import { ContactUs } from './components/contactForm/ContactMe';

function App() {
  return (
    <div className="font-serif">
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/contactme' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
