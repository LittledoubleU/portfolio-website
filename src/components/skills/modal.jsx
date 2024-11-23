import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Content from "./content";

export default function Modal(props) {

    const {selectedBtn, clickBtn} = props;
    const [selectedContent, setSelectedContent] = useState(null)

    const buttonVariants = {
        initial: {
            scale: 1
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.15,
                ease: "easeIn"
            }
        },
        tap: {
            scale: 0.8,
            transition: {
                duration: 0.15,
                ease: "easeInOut"
            }
        }
    }

    const modalVariants = {
        initial: {
            x: "100%"
        },
        animate: {
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn",
                type: "tween"
            }
        },
        exit: {
            x: "-100%",
            transition: {
                duration: 0.5,
                ease: "easeIn",
                type: "tween"
            }
        }
    }

    function setContent(content) {
        setSelectedContent(content);
    }

    return (
        <>
        <motion.div 
            className="bg modal flex justify-center items-center gap-x-10"
            key="modal"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalVariants}
        >
            <h2>{selectedBtn.Name}</h2>
            <div className="bg-[#151515] scroll-smooth aspect-square overflow-auto rounded-2xl columns-3">
                {selectedBtn.contents.map((element, index) => (
                    <button
                    key={index}
                    className="skill-btn modal-skill w-full aspect-square rounded-2xl relative"
                    onClick={() => (setContent(element))}
                    >
                        <motion.div 
                            className="bg"
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonVariants}
                        >
                            <div></div>
                            <div></div>
                        </motion.div>
                        <div className="flex flex-col items-center gap-2">
                            {element != "" && <element.img></element.img>}
                            <p className="text-sm">{element.header}</p>
                        </div>
                    </button>
                ))}
            </div>
            <button 
                className="w-1/12 aspect-square absolute right-0 top-0"
                onClick={() => (clickBtn(null))}
            >
                X
            </button>
        </motion.div>
        <AnimatePresence>
            {selectedContent !== null && 
            <Content setContent={setContent} selectedContent={selectedContent} buttonVariants={buttonVariants}/>
            }
        </AnimatePresence>
        </>
    )
}