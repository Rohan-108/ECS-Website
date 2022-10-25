import { Routes, Route } from "react-router-dom";
import Resource from "./components/Resource";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resource" element={<Resource />} />
      </Routes>
    </>
  );
}
export default App;
//use route to setup route for different pages
