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
import Gallery from "./components/Gallery/Gallery";

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
        <Route
          path="/"
          element={
            <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        {/* <Route path="/Login" element={<Login currentUser={currentUser} />} /> */}
        <Route
          path="/Developer"
          element={<Developers currentUser={currentUser} />}
        />
        <Route
          path="/ResourceHub"
          element={<Resource currentUser={currentUser} />}
        />
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Faq" element={<Faq currentUser={currentUser} />} />
        <Route path="/Member" element={<Member currentUser={currentUser} />} />
        {/* <Route
          path="/SignUp"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        /> */}
      </Routes>
    </>
  );
}
export default App;
//use route to setup route for different pages
