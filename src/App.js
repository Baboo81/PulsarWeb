import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './view/home/HomePage';
import Other from './view/other/Other';
import Contact from './view/contact/Contact';
import SinglePage from './view/home/HomePage';


function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/other' element={<Other />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer /> 
      </main>
   </div>
  );
}

export default App;
