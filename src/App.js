import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import About from './components/About';
import Article from './components/Article';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Bio />
            <About />
            <Article />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
