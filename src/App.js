
import { Route, Routes } from "react-router-dom";
import Navber from "./components/Navber";
import Posts from "./pages/posts";
import HomePage from "./pages";


function App() {
  return (
    <div className='app'>
   <Navber/>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/posts" element={<Posts/>} />
   </Routes>
    </div>
  );
}

export default App;
