import "./skills.css"
import btns from "./skils";
import { useInView, motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react"
import SkillHeader from "./header";
import Modal from "./modal";

export default function Skill() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const [isTrackingMouse, setIsTrackingMouse] = useState(false);
    const [selectedBtn, setSelectBtn] = useState(null);

    const durationTime = 2.25
    const limitDistance = 15

    const buildingVariant1 = {
        initial: {
            maxWidth: "248%"
        },
        animate : {
            maxWidth: "100%",
            transition: {
                duration: durationTime
            }
        }
    }

    const buildingVariant2 = {
        initial: {
            maxWidth: "230%"
        },
        animate : {
            maxWidth: "100%",
            transition: {
                duration: durationTime - 0.15
            }
        }
    }

    const buildingVariant3 = {
        initial: {
            maxWidth: "150%"
        },
        animate : {
            maxWidth: "100%",
            transition: {
                duration: durationTime - 0.5
            }
        }
    }

    const meVariant = {
        initial: {
            y: "100%",
            scale: 0.5
        },
        animate : {
            y: "0%",
            scale: 1,
            transition: {
                ease: "easeOut",
                duration: durationTime - 0.5,
                scale: {
                    type: "spring",
                    duration: durationTime + 2.5
                }
            }
        }
    }
    

    useEffect(() => {
        if (isInView === false) {
            // Start tracking mouse when animation is done
            setIsTrackingMouse(false);
        }
        console.log("Skills is in view: ", isInView)
    }, [isInView]);

    const buttonContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: durationTime - 0.5,
                staggerChildren: 0.25,
            }
        }
    };
    
    const buttonVariants = {
        hidden: { opacity: 0, y: "100%" },
        visible: { 
            opacity: 1, 
            y: "0%", 
            transition: { 
                duration: 1.75, 
                y: {type: isTrackingMouse? "tween": "spring"}
            }
        },
        tap: { // Move this to the top level
            scale: 0.75,
            transition: {
                duration: 0.1,
                type: "spring"
            }
        }
    };

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useTransform(mouseX, (value) =>
        Math.max(-limitDistance, Math.min(limitDistance, value))
    );
    const y = useTransform(mouseY, (value) =>
        Math.max(-limitDistance, Math.min(limitDistance, value))
    );

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate distance from the center
            if (isTrackingMouse) {
                    const centerX = window.innerWidth / 2;
                    const centerY = window.innerHeight / 2;
            
                    mouseX.set(e.clientX - centerX);
                    mouseY.set(e.clientY - centerY);
                }
        };
    
        if (isTrackingMouse) {
            window.addEventListener("mousemove", handleMouseMove);
        }
    
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isTrackingMouse, mouseX, mouseY]);

    function trackingMosueUwU() {
        if (isInView) {
            setIsTrackingMouse(true);
        }
    }

    function clickBtn(btn) {
        setSelectBtn(btn);
    }

    return (
        <section className="w-full h-screen flex flex-col justify-center items-center mt-[40rem] mb-[40rem]">
            <div className="skill-container relative overflow-hidden rounded-3xl border-[#e983d8] border-8 mt-10" ref={ref} id="Skills">
                <div className="bg">
                    <motion.img src="./assets/img/cyberpunkBG.svg" alt="bg" id="cyberpunk-bg" 
                    variants={buildingVariant3}
                    initial={"initial"}
                    animate={isInView?"animate":"initial"}/>
                    <motion.img src="./assets/img/cyberpunkBuilding2.svg" alt="building 2" id="building-2" 
                    variants={buildingVariant2}
                    initial={"initial"}
                    animate={isInView?"animate":"initial"}/>
                    <motion.img src="./assets/img/cyberpunkBuilding1.svg" alt="building 1" id="building-1" 
                    variants={buildingVariant1}
                    initial={"initial"}
                    animate={isInView?"animate":"initial"}
                    />
                    <SkillHeader view={isInView}/>
                    <motion.img 
                        src="./assets/img/skillMe.svg" alt="Skill Me UwU"
                        className={`me ${"me-transition"}`}
                        variants={meVariant}
                        initial="initial"
                        animate={isInView?"animate":"initial"}
                        style={{
                            x: isTrackingMouse ? x : "0%",
                            transitionDelay: isTrackingMouse && 0.25
                        }}
                    />
                </div>
                <div className="bg overflow-hidden">
                    <motion.div 
                        variants={buttonContainerVariants}
                        initial="hidden"
                        animate={isInView?"visible":"hidden"}
                    >
                        {btns.map((element, index) => (
                            <motion.button 
                                key={index}
                                className={`aspect-square w-1/12 bg-[#151515] absolute rounded-2xl border-4 skill-btn ${isTrackingMouse ? "btn-transition" : ""}`}
                                onAnimationComplete={() => {
                                    if (index === btns.length - 1) trackingMosueUwU(); // Only trigger once, after all buttons are done
                                }}
                                style={{
                                    left: element.position[0],
                                    top: element.position[1],
                                    x: isTrackingMouse ? x : "0%",
                                    y: isTrackingMouse ? y : "0%"
                                }}
                                whileTap={isTrackingMouse && "tap"}
                                variants={buttonVariants}
                                onClick={() => clickBtn(element)}
                            >
                                <element.img></element.img>
                            </motion.button>
                        ))}
                    </motion.div>
                    <AnimatePresence>
                    {
                        selectedBtn !== null &&
                        <Modal selectedBtn={selectedBtn} clickBtn={clickBtn} />
                    }
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}