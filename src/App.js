import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import UserList from "./components/UserList/UserList";
import PostCard from "./components/PostCard/PostCard";
import Profile from "./components/Profile/Profile";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import CreatePost from "./components/CreatePost/CreatePost";
import SignUp from "./pages/Signup/SignUp";
import Landing from "./pages/LandingPage/Landing";
import Explore from "./pages/Explore/Explore";
import Bookmark from "./pages/Bookmark/Bookmark";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import LikePage from "./pages/LikePage/LikePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
        <Route path="/likepage" element={<LikePage />}></Route>
        <Route path="/profilepage" element={<ProfilePage />}></Route>
      </Routes>
<Footer />
      <ToastContainer />
    </div>
  );
}

export default App;