import './introduction.css'
import { useRef, useEffect, useState } from 'react'
import { animate, motion } from "framer-motion"; // if you only need 'motion'
import { useInView } from "framer-motion"; // if you only need 'useInView'
import { LinkedInIcon, GithubIcon, FacebookIcon } from '../icon/icon';

export default function Introduction() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);

    // Debug
    useEffect(() => {
        console.log("Introduction is in view: ", isInView)
        setIsInitialAnimationComplete(false)
    }, [isInView]);

    function expandImageWidth(isInView, isInitialAnimationComplete) {
        return {
            initial: { scale: 0 }, // Starts with scale 0
            animate: {
                scale: isInView && !isInitialAnimationComplete ? 1 : 0, // Animate to scale 1 when in view and the initial animation hasn't finished
            },
            transition: {
                delay: 0.65,
                duration: 0.75,
                ease: "easeIn",
                type: "spring",
                onComplete: () => setIsInitialAnimationComplete(true), // Mark the initial animation as complete
            },
            whileInView: isInitialAnimationComplete ? {
                scale: [1, 0.95, 1], // Idle animation: scale slightly larger and back
                transition: {
                  repeat: Infinity,
                  duration: 2.25,
                  ease: "easeInOut"
                },
            }
            : {}
        };
    }

    function animateCorner(isInitialAnimationComplete) {
        return (
            {
                initial: {
                    width: "0%",
                    height: "0%",
                    rotate: 180
                },
                animate: {
                    width: isInView ? "100%": "0%",
                    height: isInView ? "100%": "0%",
                    rotate: isInView ? 0: 180
                },
                transition: { 
                    duration: 0.65, 
                    ease: "easeOut",
                    type: "Tween",
                    width: {duration:0.45},
                    height: {duration:0.45},
                    rotate:{delay:0.45, type:"spring", stiffness: 100}
                },
                whileInView: isInitialAnimationComplete ? {
                    scale: [1, 1.05, 1], // Idle animation: scales slightly larger and then back to normal
                    transition: { repeat: Infinity, duration: 2.25, ease: "easeInOut" }
                }
                : {}
            }
        )
    }

    function slideInParagraph() {
        return (
            {
                initial: {
                    x: "-100%"
                },
                animate: {
                    x: isInView ? 0 : "-100%"
                },
                transition: {
                    duration: 1.05,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 45
                }
            }
        )
    }

    function revealButton() {
        return (
            {
                initial: {
                    y: "100%",
                    opacity: 0
                },
                animate: {
                    y: isInView ? 0 : "100%",
                    opacity: isInView ? 1 : 0
                },
                transition: {
                    scale: 2,
                    duration: 0.55,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 150,
                    opacity: {
                        ease: "easeOut",
                        duration: 0.35
                    }
                },
                whileTap: {
                    scale: 0.85,
                    duration: 0.75,
                    ease: "ease",
                    type: "spring",
                    stiffness: 100,
                }
            }
        )
    }

    const contact = [{
        name: "facebook",
        rotate: '675deg',
        component: FacebookIcon,
        href: "https://www.facebook.com/profile.php?id=100002356854112"
    },
    {
        name: "github",
        rotate: '585deg',
        component: GithubIcon,
        href: "https://github.com/LittledoubleU"
    },
    {
        name: "linkedIn",
        rotate: '405deg',
        component: LinkedInIcon,
        href: "https://www.linkedin.com/in/sukhum-phonnopparat-6718a729a/"
    }]

    const contactContainerVariant = {
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

    const contactVaraints = {
        initial: {
            scale: 1,
            y: "100%"
        },
        hover: {
            scale: 1.25,
            transition: {
                duration: 1,
                type: "spring",
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.75,
            transition: {
                duration: 0.7,
                type: "spring"
            }
        },
        animate: {
            y: isInView ? 0 : "100%",
            opacity: isInView ? 1 : 0
        }
    }

    return (
        <section className="w-full h-dvh flex flex-col justify-center items-center mt-[-4rem] mb-[40rem]">
            <div className="introduction-container w-[60rem] h-[30rem]" ref={ref} id="Introduction">
                <div className="relative flex justify-center items-end w-full">
                    <div className=" overflow-hidden w-full">
                        <h1 className={isInView? "animate": ""}>
                            Hi, I am <span className='text-[#e983d8]'>Sukhum Phonnopparat</span>
                        </h1>
                        <motion.p className='mb-6 mt-3' {...slideInParagraph()}>A third-year Applied Statistics and Data Analytics student at King Mongkut's Institute of Technology Ladkrabang, I am interested to intern as a Full-Stack Developer. With many experience in frontend like HTML, CSS, JavaScript, jQuery, and React, alongside basic knowledge in backend development with Express.js, Flask, and RESTful APIs, web-hosting, I learn web development through project-based. I study by myself through online communities and also have experiences in working in team environment. I am excited to participate internship.</motion.p>
                        <motion.div className='flex items-center mb-10'>
                            <motion.button 
                                className='bg-[#e983d8] rounded-full py-2 px-6 me-8' {...revealButton()}
                                onClick={() => window.location.href = 'https://drive.google.com/drive/folders/18tWbqGH0EEqDproDYDU-hEd3Y34OrMUj?usp=sharing'}
                            >
                                <div>
                                    Download CV
                                </div>
                            </motion.button>
                            {contact.map((element, index) => (
                                <a 
                                href={element.href} 
                                key={index}
                                >
                                    <motion.div 
                                        className='rounded-full border-[#e983d8] border-2 w-10 aspect-square me-5 relative'
                                        variants={contactVaraints}
                                        initial="initial"
                                        whileHover="hover"
                                        whileTap="tap"
                                        animate="animate"
                                    >
                                        {<element.component />}
                                    </motion.div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <div className='p-6 flex justify-center items-center'>
                    <motion.div className='me-img relative flex justify-center items-center h-full' {...animateCorner(isInitialAnimationComplete)}>
                        <motion.img src="./assets/img/me.jpg" alt="me" {...expandImageWidth(isInView, isInitialAnimationComplete)}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}