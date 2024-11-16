import Navbar from "./components/navbar/navbar"
import Introduction from "./components/Introduction/introduction"
import Contact from "./components/contact/contact"
import Skill from "./components/skills/Skills"

function App() {
    return (
        <main className="w-full h-auto relative bg-[#151515] text-neutral-50">
            <div className="">
                <Navbar />
                <Introduction />
                <Contact />
                <Skill />
            </div>
        </main>
    )
}

export default App
