import './project.css'
import projects from './projectJson.js'
import Card from './card.jsx'
import CardModal from './modal.jsx'
import { useState, useRef, useEffect } from 'react'
import { useInView, AnimatePresence } from "framer-motion";

export default function Project() {

    const [selectedCard, setSelectedCard] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("Project is in view: ", isInView)
    }, [isInView]);

    return (
        <section className="w-full h-auto flex flex-col justify-center items-center mt-40">
            <div className='w-5/6 project-container aspect-video relative' ref={ref}>
            {projects.map((element, index) => (
                <Card element={element} index={index} setSelectedCard={setSelectedCard} key={index} />
            ))}

                <AnimatePresence>
                    {
                        selectedCard !== null &&
                        <CardModal selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                    }
                </AnimatePresence>

            </div>
        </section>
    )
}