import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import Developers from "./components/Developers/Developers";
import Faq from "./components/FAQ/Faq";
import Member from "./components/Members/Member";
import Resource from "./components/resource/Resource";
import Gallery from "./components/Gallery/Gallery";
import Protected from "./Protected";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Particle from "./components/Particle";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
  return (
    <>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Particle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Developer" element={<Developers />} />
        <Route
          path="/ResourceHub"
          element={
            <Protected currentUser={currentUser}>
              <Resource />
            </Protected>
          }
        />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Member" element={<Member />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
