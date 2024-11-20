import './project.css'
import projects from './projectJson.js'
import Card from './card.jsx'
import CardModal from './modal.jsx'
import { useState, useRef, useEffect } from 'react'
import { useInView, AnimatePresence, motion, animate } from "framer-motion";

export default function Project() {

    const [selectedCard, setSelectedCard] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("Project is in view: ", isInView)
    }, [isInView]);

    const cardContainerVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.5
            }
        }
    }

    return (
        <section className="w-full h-auto flex flex-col justify-center items-center mt-40 relative">
            <motion.div 
                className='w-5/6 project-container aspect-video relative overflow-auto pb-8 overflow-x-hidden'
                ref={ref}
                initial="initial"
                animate={isInView?"animate":"initial"}
                variants={cardContainerVariants}
            >

            {projects.map((element, index) => (
                <Card element={element} setSelectedCard={setSelectedCard} isInView={isInView} key={index} />
            ))}

            </motion.div>

            <AnimatePresence>
                {
                    selectedCard !== null &&
                    <div className="modal w-full h-[70rem] absolute top-0 left-0 z-50">
                        <CardModal selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                    </div>
                }
            </AnimatePresence>

        </section>
    )
}