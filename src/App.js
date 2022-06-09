import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/Shared/Footer';
import { ContactUs } from './components/contactForm/ContactMe';
import Portfolio from './components/Skills/Skills';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/Shared/LoadingScreen';
import Error from './components/Shared/Error';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  return (
    <>
      {!loading ? (<div className="font-serif" style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1548685913-fe6678babe8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80")` 
    }}>
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Portfolio/>}/>
        <Route path='/contactme' element={<ContactUs/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/education' element={<Education/>}/>
<Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>):
    (
      <LoadingScreen />
    )}
    </>
      
  );
}

export default App;
