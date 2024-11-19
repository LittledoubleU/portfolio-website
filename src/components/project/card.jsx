import { motion } from "framer-motion";

export default function Card(props) {

    const {element, index, setSelectedCard} = props;

    const cardVariants = {
        initial: {
            scale: 1
        },
        tap: {
            scale: 0.85,
            transition: {
                duration: 1,
                type: "spring"
            }
        },
        hover: {
            scale: 0.9,
            transition: {
                duration: 0.75,
                type: "spring"
            }
        }
    }

    return (
        <motion.button
            className='thumbnail rounded-2xl overflow-hidden'
            initial="initial"
            whileTap="tap"
            whileHover="hover"
            variants={cardVariants}
            onClick={() => (setSelectedCard(element))}
            
        >
            <img src={element.thumbnail.img} alt={element.thumbnail.name} />
            <div className='bg-black p-5 text-start'>
                <h2>"{element.thumbnail.name}"</h2>
                <h3>{element.thumbnail.description}</h3>
            </div>
        </motion.button>
    )
}