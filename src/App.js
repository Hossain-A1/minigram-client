
import { Route, Routes } from "react-router-dom";
import Navber from "./components/Navber";
import Posts from "./pages/posts";
import HomePage from "./pages";
import PostItem from "./components/PostItem";



function App() {
  return (
    <div className='app'>
   <Navber/>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/posts" element={<Posts/>} />
    <Route path="/" element={<PostItem/>} />
   </Routes>
    </div>
  );
}

export default App;
