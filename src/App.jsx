import Navbar from "./components/navbar/navbar"
import Introduction from "./components/Introduction/introduction"

function App() {
    return (
        <main className="w-full h-auto relative bg-neutral-50 dark:bg-[#151515] text-[#151515] dark:text-neutral-50">
            <div className="">
                <Navbar />
                <Introduction />
                <section className="w-full h-screen">
                    
                </section>
            </div>
        </main>
    )
}

export default App
