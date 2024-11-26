import { motion } from "framer-motion";

export default function Card(props) {

    const {element, setSelectedCard, isInView} = props;

    const cardVariants = {
        initial: {
            scale: 1,
            y: "100%",
            opacity: 0
        },
        animate: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 1,
                type: "tween",
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.75,
            transition: {
                duration: 1,
                type: "spring"
            }
        },
        hover: {
            scale: 0.9,
            transition: {
                duration: 0.9,
                type: "spring"
            }
        }
    }

    return (
        <motion.button
            className='w-96 lg:w-80 md:w-[35rem] thumbnail rounded-2xl overflow-hidden bg-black'
            initial="initial"
            animate={isInView?"animate":"initial"}
            whileTap="tap"
           
            variants={cardVariants}
            onClick={() => (setSelectedCard(element))}
            
        >
            <img src={element.thumbnail} alt={element.name} />
            <div className=' p-5 text-start'>
                <h2>{element.name}</h2>
                <h3>{element.description}</h3>
            </div>
        </motion.button>
    )
}