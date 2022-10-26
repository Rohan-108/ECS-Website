import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Modal/Login";
import SignUp from "./components/Modal/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import Developers from "./components/Developers/Developers";
import Faq from "./components/FAQ/Faq";
import Member from "./components/Members/Member";
import Resource from "./components/resource/Resource";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
  console.log(currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login" element={<Developers />} />
        <Route path="/Login" element={<Resource />} />
        <Route path="/Login" element={<Faq />} />
        <Route path="/Login" element={<Member />} />
        <Route
          path="/SignUp"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </>
  );
}
export default App;
//use route to setup route for different pages
