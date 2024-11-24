import { motion } from 'framer-motion';

export default function ContactHeader(props) {

    const isInView = props.isInView;

    const transitionVariants = {
        C: {
            initial: {
                x: "-100%",
                clipPath: "inset(0 0 0 100%)",
            },
            animate: {
                x: isInView ? "0%" : "-100%",
                clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(0 0 0 100%)",
                transition: {
                    duration: 1.25,
                    ease: "easeOut",
                    type: "spring",
                },
            },
        },
        N: {
            initial: {
                x: "100%",
                clipPath: "inset(0% 100% 0% 0%)",
            },
            animate: {
                x: isInView ? "0%" : "100%",
                clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
                transition: {
                    duration: 0.85,
                    ease: "easeOut",
                    type: "tween",
                },
            },
        },
        O: {
            initial: {
                scale: 0,
            },
            animate: {
                scale: isInView ? 1 : 0,
                transition: {
                    duration: 0.95,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                },
            },
        },
        T: {
            initial: {
                y: "100%",
                clipPath: "inset(0% 0% 100% 0%)",
            },
            animate: {
                y: isInView ? "0%" : "100%",
                clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                },
            },
        },
        A: {
            initial: {
                y: "-100%",
                clipPath: "inset(100% 0% 0% 0%)",
            },
            animate: {
                y: isInView ? "0%" : "-100%",
                clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
                transition: {
                    duration: 0.75,
                    ease: "easeOut",
                },
            },
        },
    };


    const letters = ["C", "O", "N", "T", "A", "C", "T"]

    return (
        <h2 className='contact-header text-[#e983d8] mb-5 mt-20'>
            {letters.map((letter, index) => (
                <motion.div
                    initial="initial"
                    animate="animate"
                    {...transitionVariants[letter]} 
                    key={letter + index}
                >
                    {letter}
                </motion.div>
            ))}
        </h2>
    )
}