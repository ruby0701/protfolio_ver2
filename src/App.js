import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from './components/Banner';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Banner></Banner>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
