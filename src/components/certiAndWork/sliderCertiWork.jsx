import { useState } from "react";
import portfolio from "./certiWork";
import { motion } from "framer-motion";
import { LeftButton, RightButton } from "../icon/icon";

export default function SliderCertiWork(props) {
    const {section, prevButton, nextButton, sliderIndex } = props;
    const port = portfolio[section];
    console.log(sliderIndex)
    console.log(port)

    const buttonVariants = {
        initial: {
            scale: 1
        },
        hover: {
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        },
        tap: {
            scale: 0.75,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    }

    return (
        <div className="w-full h-full">
            <div className="w-full h-full relative">
                <div className="bg sec overflow-hidden">
                    <img src={port[sliderIndex].img} alt="bg img" className="absolute top-0" />
                    <motion.button 
                            className="absolute aspect-square w-12 top-1/3 left-[2.5%]"
                            initial="initial"
                            whileTap="tap"
                            whileHover="hover"
                            variants={buttonVariants}
                            onClick={() => (prevButton(port))}
                        >
                            <LeftButton />
                        </motion.button>
                        <motion.button 
                            className="absolute aspect-square w-12 top-1/3 right-[2.5%]"
                            initial="initial"
                            whileTap="tap"
                            whileHover="hover"
                            variants={buttonVariants}
                            onClick={() => (nextButton(port))}
                        >
                            <RightButton />
                        </motion.button>
                    <div className="absolute w-full bottom-0 px-5 pt-5 h-[7.5rem] bg-[#000000b3] flex flex-col">
                        <div className="w-full h-1/3 flex justify-between items-start">
                            <h3>{port[sliderIndex].title}</h3>
                            <p>{port[sliderIndex].dateRange}</p>
                        </div>
                        <div className="w-full h-2/3 flex justify-between">
                            <div>
                                <p>{port[sliderIndex].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}