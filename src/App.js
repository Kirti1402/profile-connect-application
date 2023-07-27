import './App.css';
import {Routes,Route} from "react-router-dom";
import { Landing } from './Pages/Landing/Landing';
import { Profile } from './Pages/Home/Profile';
import { Gallery } from './Pages/Home/Gallery';
import { ToDo } from './Pages/Home/ToDo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/todo" element={<ToDo/>} />
      </Routes>
    </div>
  );
}

export default App;
