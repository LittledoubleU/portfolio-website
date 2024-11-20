import Navbar from "./components/navbar/navbar"
import Introduction from "./components/Introduction/introduction"
import Contact from "./components/contact/contact"
import Skill from "./components/skills/Skills"
import Project from "./components/project/project"
import React, { useEffect, useState } from "react";

function App() {

    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

    const updateOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateOrientation);
      return () => {
        window.removeEventListener("resize", updateOrientation);
      };
    }, []);

    return (
        <main className="w-full h-auto relative bg-[#151515] text-neutral-50">
            {isLandscape ? (
            <div className="flex flex-col justify-center items-center w-full">
                <Navbar />
                <Introduction />
                <Contact />
                <Skill />
                <Project />
            </div>
            ) : (
              <div className="w-full h-screen flex justify-center items-center">
                <h1 className="text-3xl text-center">Please rotate your device to landscape mode</h1>
              </div>
            )}
        </main>
    )
}

export default App
