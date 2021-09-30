import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Friends/>
      <NotFound/>
    </div>
  );
}
export default App;
