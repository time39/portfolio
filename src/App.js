import './App.scss';
import Layout from './components/Layout'
import {Routes, Route} from 'react-router-dom'
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element ={<Layout/>}></Route>
        <Route path="/about" element ={<About/>}></Route>
    </Routes>
  );
}

export default App;
