import './navbar.css'
import Dropdown from '../dropdown/dropdown'
import ThemeButton from '../button/button'

export default function Navbar() {
    const menuItems = [
        { label: "Introduction", href: "#Introduction" },
        { label: "Settings", href: "#" },
        { label: "Logout", href: "#" }
    ]

    return (
            <nav className='w-full flex justify-between items-center h-20 sticky top-0 px-24 text-nowrap'>
                <div className='profile'>Sukhum Phonnopparat</div>
                <div className='flex'>
                    <Dropdown menuItems={menuItems} dropName={"Show All"} />
                    <a href="" className="mx-10">About</a>
                    <ThemeButton />
                </div>
            </nav>
    )
}