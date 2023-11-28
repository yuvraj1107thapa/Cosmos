import "./App.css";
import Mockman from "mockman-js";
import Navbar from "./components/Navbar/Navbar";
import Home  from "./pages/Home/Home";
import UserList from "./components/UserList/UserList";
import PostCard from "./components/PostCard/PostCard";


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Navbar /> */}
      {/* <PostCard /> */}
      <UserList />
      
    </div>
  );
}

export default App;