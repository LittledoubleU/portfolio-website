import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SliderCertiWork from "./sliderCertiWork";
import './certiWork.css'

export default function CertiWorkMain() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const [section, setSection] = useState(null);

    const [sliderIndex, setSliderIndex] = useState(0);

    function prevButton(port) {
        if (sliderIndex > 0) {
            setSliderIndex((prev) => prev - 1);
        } else {
            setSliderIndex(port.length - 1);
        }
    }

    function nextButton(port) {
        if (sliderIndex < port.length - 1) {
            setSliderIndex((prev) => prev + 1);
        } else {
            setSliderIndex(0);
        }
    }

    useEffect(() => {
        console.log("CertiWork is in view: ", isInView)
        setSection(null)
        setSliderIndex(0)
    }, [isInView]);

    const buttonVariants = {
        initial: {
            y: "-100%",
            scale: 0.1
        },
        animate: {
            y: "0%",
            scale: 1,
            transition: {
                duration: 1.15,
                ease: "easeIn",
                type: "spring"
            }
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.7,
                type: "spring"
            }
        },
        tap: {
            scale: 0.7,
            transition: {
                duration: 0.7,
                type: "spring"
            }
        }
    }

    return (
        <section className="w-full h-screen flex flex-col justify-center items-center mt-[40rem]">
            <div className="certiWork-container relative overflow-hidden flex flex-col justify-between" ref={ref} id="CertiWork">
                <div className="w-full flex justify-evenly p-5">
                    <motion.button 
                        className="w-1/6 rounded-full bg-[#e983d8] py-5 px-1 flex justify-center items-center"
                        initial="initial"
                        animate={isInView?"animate":"initial"}
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                        onClick={() => (setSection("certificate"))}
                    >
                        <img src="" alt="" />
                        <p>Certificate</p>
                    </motion.button>
                    <motion.button 
                        className="w-1/6 rounded-full bg-[#e983d8] py-5 px-1 flex justify-center items-center"
                        initial="initial"
                        animate={isInView?"animate":"initial"}
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                        onClick={() => {
                            setSection("workingExperience");
                            setSliderIndex(0);
                        }}
                    >
                        <img src="" alt="" />
                        <p>Working Experience</p>
                    </motion.button>
                </div>
                {section !== null && <SliderCertiWork section={section} prevButton={prevButton} nextButton={nextButton} sliderIndex={sliderIndex} />}
            </div>
        </section>
    )
}