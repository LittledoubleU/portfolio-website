import { motion } from "framer-motion";
import { useState } from "react";

export default function Content(props) {

    const {setContent, selectedContent, buttonVariants} = props;
    const [selectItem, setSelectItem] = useState(null);

    const modalVariants = {
        initial: {
            y: "100%"
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn",
                type: "tween"
            }
        },
        exit: {
            y: "100%",
            transition: {
                duration: 0.5,
                ease: "easeIn",
                type: "tween"
            }
        }
    }

    return (
        <motion.div 
            className="bg bg-[#151515] flex justify-center items-center modal"
            key="modal"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalVariants}
        >
            <div>
                <h2 className="">{selectItem === null ? selectedContent.header : selectItem.name}</h2>
                {selectItem !== null && 
                    <p>{selectItem.details}</p>
                }
            </div>
            <div className="aspect-square w-1/2 columns-3 bg-[#151515]">
                {selectedContent.content.map((element, index) => (
                    <button
                        key={index}
                        className="skill-btn modal-skill w-full aspect-square rounded-2xl relative"
                        onClick={() => (setSelectItem(element))}
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
                            <p className="text-sm">{element.name}</p>
                        </div>
                    </button>
                ))}
            </div>
            <button 
                className="w-1/12 aspect-square absolute right-0 top-0"
                onClick={() => {setContent(null); setSelectItem(null);}}
            >
                X
            </button>
        </motion.div>
    )
}