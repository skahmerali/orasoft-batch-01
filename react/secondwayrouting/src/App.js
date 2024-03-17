import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeOutlet from "./components/navigationOutlet/HomeOutlet";
import AboutOutlet from "./components/navigationOutlet/AboutOutlet";
import AboutDetail from "./components/AboutDetail";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeOutlet />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutOutlet />}>
          <Route index element={<About />} />
          <Route path="/about/detail"  element={<AboutDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import NavigationBar from "./components/NavigationBar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <BrowserRouter>
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
