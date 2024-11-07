import Navbar from "./components/navbar/navbar"
import Introduction from "./components/Introduction/introduction"
import Contact from "./components/contact/contact"

function App() {
    return (
        <main className="w-full h-auto relative bg-[#151515] text-neutral-50">
            <div className="">
                <Navbar />
                <Introduction />
                <Contact />
                <section className="w-full h-screen">
                    
                </section>
            </div>
        </main>
    )
}

export default App
