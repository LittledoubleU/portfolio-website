import './navbar.css'
import Dropdown from '../dropdown/dropdown'

export default function Navbar() {
    const menuItems = [
        { label: "Introduction", href: "#Introduction" },
        { label: "Contact", href: "#Contact" },
        { label: "Skill", href: "#Skills" },
        { label: "Project", href: "#Project" },
        { label: "Certificate & Working Experience", href: "#CertiWork" },
    ]

    return (
            <nav className='w-full flex justify-between items-center h-20 sticky top-0 px-24 text-nowrap'>
                <div className='profile'>Sukhum Phonnopparat</div>
                <div className='flex gap-10'>
                    {menuItems.map((element, index) => (<a href={element.href} key={index}>{element.label}</a>))}
                </div>
            </nav>
    )
}