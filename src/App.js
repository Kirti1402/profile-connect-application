import './App.css';
import {Routes,Route} from "react-router-dom";
import { Landing } from './Pages/Landing/Landing';
import { Profile } from './Pages/Home/Profile';
import { Gallery } from './Pages/Home/Gallery';
import { ToDo } from './Pages/Home/ToDo';
import { Post } from './Pages/Home/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/todo" element={<ToDo/>} />
      </Routes>
    </div>
  );
}

export default App;
