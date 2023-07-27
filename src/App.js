import './App.css';
import {Routes,Route} from "react-router-dom";
import { Landing } from './Pages/Landing/Landing';
import { Profile } from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
