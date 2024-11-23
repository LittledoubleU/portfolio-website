import Navbar from "./components/navbar/navbar"
import Introduction from "./components/Introduction/introduction"
import Contact from "./components/contact/contact"
import Skill from "./components/skills/Skills"
import Project from "./components/project/project"
import CertiWorkMain from "./components/certiAndWork/certiWorkMain"
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
        <main className="w-full h-screen relative text-neutral-50 overflow-y-scroll">
            {isLandscape ? (
            <>
                <Navbar />
                <Introduction />
                <Contact />
                <Skill />
                <Project />
                <CertiWorkMain />
            </>
            ) : (
              <div className="w-full h-screen flex justify-center items-center">
                <h1 className="text-3xl text-center">Please rotate your device to landscape mode</h1>
              </div>
            )}
        </main>
    )
}

export default App
