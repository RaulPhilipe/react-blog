import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single"
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/register" element={user ? <Home/> : <Register />}/>
      <Route path="/login" element={user ? <Home /> : <Login />}/>
      <Route path="/write" element={user ? <Write /> : <Register />}/>
      <Route path="/settings" element={user ? <Settings /> : <Register />}/>
      <Route path="/post/:postId" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
