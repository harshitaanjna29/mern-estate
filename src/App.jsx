import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import Profile from "./pages/profile";

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Sign-in" element={<SignIn/>} />
    <Route path="/Sign-Up" element={<SignUp/>} />
    <Route path="/about" element={<about/>} />
    <Route path="/Profile" element={<Profile/>} />
  </Routes>
  </BrowserRouter>
}
