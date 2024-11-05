import { useState } from "react"

export default function Dropdown(props) {
    const {menuItems, dropName} = props;
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <button
        onClick={toggleDropdown}
        >
            <p className="hover:opacity-70">
                {dropName}
            </p>
            {
                isOpen&&
                <div className="flex flex-col absolute">
                {menuItems.map((item, index) => (
                    <a
                        href={item.href}
                        key={index}
                        className="m-1 hover:opacity-70"
                    >
                        {item.label}
                    </a>
                ))}
                </div>
            }
        </button>
    )
}