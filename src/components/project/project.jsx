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

    const projectHeaderVariant = {
        initial: {
            y: "100%",
            clipPath: "inset(0% 0% 100% 0%)", // Close bottom 100%
        },
        animate: {
          y: isInView?"0%": "100%",
          clipPath: isInView?"inset(0% 0% 0% 0%)": "inset(0% 0% 100% 0%)", // Open to no clipping
          transition: {
            duration: 0.65,
            ease: "easeOut",
          }
        }
    }

    return (
        <section className="w-full h-screen flex flex-col justify-center items-center mt-[40rem] mb-[40rem] relative">
            <motion.div 
                className='w-5/6 h-[34.5rem] project-container aspect-video relative pb-8'
                ref={ref}
                id='Project'
                initial="initial"
                animate={isInView?"animate":"initial"}
                variants={cardContainerVariants}
            >
                <motion.h2 
                    className='text-center text-[6.5rem]'
                    initial="initial"
                    animate="animate"
                    variants={projectHeaderVariant}
                >
                    Project
                </motion.h2>
                <div className="bg overflow-x-hidden overflow-auto mt-40">
                    {projects.map((element, index) => (
                        <Card element={element} setSelectedCard={setSelectedCard} isInView={isInView} key={index} />
                    ))}
                </div>

            </motion.div>

            <AnimatePresence>
                {
                    selectedCard !== null &&
                    <div className="modal bg z-[100]">
                        <CardModal selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                    </div>
                }
            </AnimatePresence>

        </section>
    )
}