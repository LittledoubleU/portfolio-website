import { animate, motion } from "framer-motion";
import { useState, useEffect } from 'react'
import { LeftButton, RightButton } from "../icon/icon";
export default function CardModal(props) {

    const {selectedCard ,setSelectedCard} = props;
    const [slider, setSlider] = useState(0);

    const buttonVariants = {
        initial: {
            scale: 1
        },
        hover: {
            scale: 0.9,
            transition: {
                duration: 0.25,
                ease: "easeIn"
            }
        },
        tap: {
            scale: 0.75
        }
    }

    const cardModalVariants = {
        initial: {
            opacity: 0,
            y: "-100%",
            clipPath: "inset(100% 0% 0% 0%)", // Close bottom 100%
        },
        animate: {
            opacity: 1,
            y: "0%",
            clipPath: "inset(0% 0% 0% 0%)", // Close bottom 100%
            transition: {
                duration: 0.5,
                ease: "easeIn",
                opacity: {
                    duration: 0.5
                }
            }
        },
        exit: {
            opacity: 0,
            y: "-100%",
            clipPath: "inset(100% 0% 0% 0%)", // Close bottom 100%
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                opacity: {
                    duration: 0.5
                }
            }
        }
    }

    function prevButton() {
        if (slider > 0) {
            setSlider((prev) => prev - 1);
        } else {
            setSlider(selectedCard.content.img.length - 1);
        }
    }

    function nextButton() {
        if (slider < selectedCard.content.img.length - 1) {
            setSlider((prev) => prev + 1);
        } else {
            setSlider(0);
        }
    }

    return (
        <motion.div 
            className="bg bg-black rounded-2xl"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardModalVariants}
        >
            <div className="w-full h-full flex flex-col justify-center flex-1 sticky top-0 pt-6 px-6">
                <div className="h-1/2 flex justify-center items-center px-44 relative overflow-hidden">
                    <img 
                        className="w-1/2"
                        src={selectedCard.content.img[slider]} 
                        alt={selectedCard.name+" "+ slider}
                    />
                    <div className="bg slider">
                        <motion.button 
                            className="aspect-square w-16"
                            initial="initial"
                            whileTap="tap"
                            whileHover="hover"
                            variants={buttonVariants}
                            onClick={prevButton}
                        >
                            <LeftButton />
                        </motion.button>
                        <motion.button 
                            className="aspect-square w-16"
                            initial="initial"
                            whileTap="tap"
                            whileHover="hover"
                            variants={buttonVariants}
                            onClick={nextButton}
                        >
                            <RightButton />
                        </motion.button>
                    </div>
                </div>
                <div className="detail grid grid-cols-3 grid-rows-2 h-1/2 text-start p-1 mt-10">
                    <div className="row-span-2">
                        <div className="w-full pt-10 ps-5">
                            <h2 className="text-2xl project-header">
                                {selectedCard.name}
                            </h2>
                            <h3 className="">
                                {selectedCard.description}
                            </h3>
                        </div>
                    </div>
                    <div className="pt-5 ps-5">
                        <div className="h-1/2 mb-2">
                            <p>
                                {selectedCard.content.roleDetail}
                            </p>
                        </div>
                        <div className="flex justify-around h-1/2">
                            <div>
                                <h3>ROLE</h3>
                                <p>{selectedCard.content.role}</p>
                            </div>
                            <div>
                                <h3>COLLABORATORS</h3>
                                <p>{selectedCard.content.collaborators}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 ps-5">
                        <div className="h-1/2 mb-2">
                            <p>
                                {selectedCard.content.durationDetail}
                            </p>
                        </div>
                        <div className="flex justify-around h-1/2">
                            <div>
                                <h3>DURATION</h3>
                                <p>{selectedCard.content.duration}</p>
                            </div>
                            <div>
                                <h3>TOOLS</h3>
                                <p>{selectedCard.content.tools.map((element) => (<span>{element} </span>))}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col justify-between pt-2 px-5 pb-2 border-t-2 border-[#222222]">
                        <div>
                            <h2 className="text-2xl mb-2">Project Overview</h2>
                            <p>{selectedCard.content.detail}</p>
                        </div>
                        <a href={selectedCard.content.link} className="text-lg underline hover:opacity-75">Link: {selectedCard.content.link}</a>
                    </div>
                </div>
            </div>
            <button 
                className="w-1/12 aspect-square absolute right-0 top-0"
                onClick={() => (setSelectedCard(null))}
            >
                X
            </button>
        </motion.div>
    )
}