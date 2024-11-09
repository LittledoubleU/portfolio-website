import './contact.css'
import { useRef, useEffect, useState } from 'react';
import { useInView, motion, easeOut, spring, delay } from 'framer-motion';
import ContactHeader from './header';

export default function Contact() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const [isCompleted, setIsCompleted] = useState(false)

    // Debug
    useEffect(() => {
        console.log("Contact is in view: ", isInView)
    }, [isInView]);

    const [isOpened, setIsOpened] = useState(false);

    const btnMainVariant = {
        view: {
            opacity: 1,
            y: "-50%",
            scale: [1.25, 1],
            transition: {
                duration: 0.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 200,
                delay: 0.75,
                scale: {
                    duration: 0.25,
                    delay: 1,
                    ease: "easeIn",
                    type: "spring", 
                    stiffness: 200
                }
            }
        },
        open: {

        },
        close: {

        }
    }

    return (
        <section className="w-full h-auto flex flex-col justify-center items-center mt-40">
            <ContactHeader />
            <div className="contact-container relative" ref={ref} id="Contact">
                <motion.button className='rounded-full w-16 h-16 bg-[#e983d8] main-btn'
                onClick={() => setIsOpened(!isOpened)}
                initial={{x: "-50%", y: "50%", opacity: 0, scale: 1}}
                animate={isInView ? "view" : ""}
                variants={btnMainVariant}
                onAnimationComplete={() => {
                    setIsCompleted(true)
                }}
                whileHover={isCompleted?{
                    scale: 0.85,
                    duration: 1,
                    ease: "easeIn",
                }:{}}
                onTap={isCompleted?{
                    scale: 0.5,
                    duration: 1,
                    ease: "easeIn",
                }:{}}
                >
                </motion.button>
                {isOpened === true && 
                    <>
                        <div className='facebook absolute w-2/5 h-1'>
                            <button className='rounded-full w-16 h-16 bg-[#e983d8]'></button>
                        </div>
                        <div className='github absolute w-2/5 h-1'>
                            <button className='rounded-full w-16 h-16 bg-[#e983d8]'></button>
                        </div>
                        <div className='gmail absolute w-2/5 h-1'>
                            <button className='rounded-full w-16 h-16 bg-[#e983d8]'></button>
                        </div>
                        <div className='linkedIn absolute w-2/5 h-1'>
                            <button className='rounded-full w-16 h-16 bg-[#e983d8]'></button>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}