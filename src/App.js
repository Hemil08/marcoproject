import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
