import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/SignUp";
import Profile from "./pages/profile";
import Header from "./components/Header";

export default function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Sign-in' element={<SignIn/>} />
      <Route path='/Sign-Up' element={<SignUp/>} />
      <Route path='/about' element={<about/>} />
      <Route path='/Profile' element={<Profile/>} />
    </Routes>
  </BrowserRouter>
    );
  }
