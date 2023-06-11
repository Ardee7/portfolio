import React, { useState } from "react";
import SectionRenderer from "./components/SectionRenderer";
import Navbar from "./components/Navbar";

function App() {
  const [navIndex, setNavIndex] = useState(0);
  return (
    <div className="liquid-background" style={{backgroundColor: '#18314F'}}>
      <Navbar index={navIndex} setIndex={setNavIndex} />
      <SectionRenderer index={navIndex} setIndex={setNavIndex} />
    </div>
  );
}

export default App;
