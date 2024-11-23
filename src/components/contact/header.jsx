import { motion } from 'framer-motion';

export default function ContactHeader(props) {

    const isInView = props.isInView;

    const transitionVariants = {
        C: {
            initial: {
              x: "-100%",
              clipPath: "inset(0 0 0 100%)", // Close left 100%
            },
            whileInView: {
              x: "0%",
              clipPath: "inset(0% 0% 0% 0%)", // Open to no clipping
            },
            transition: {
              duration: 1.25,
              ease: "easeOut",
              type: "spring"
            },
        },
        N: {
            initial: {
              x: "100%",
              clipPath: "inset(0% 100% 0% 0%)", // Close right 100%
            },
            whileInView: {
              x: "0%",
              clipPath: "inset(0% 0% 0% 0%)", // Open to no clipping
            },
            transition: {
              duration: 0.85,
              ease: "easeOut",
              type: "tween",
            },
        },
        O: {
            initial: {
              scale: 0
            },
            whileInView: {
              scale: 1
            },
            transition: {
              duration: 0.95,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            },
        },
        T: {
            initial: {
              y: "100%",
              clipPath: "inset(0% 0% 100% 0%)", // Close bottom 100%
            },
            whileInView: {
              y: "0%",
              clipPath: "inset(0% 0% 0% 0%)", // Open to no clipping
            },
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
        },
        A: {
            initial: {
              y: "-100%",
              clipPath: "inset(100% 0% 0% 0%)", // Close top 100%
            },
            whileInView: {
              y: "0%",
              clipPath: "inset(0% 0% 0% 0%)", // Open to no clipping
            },
            transition: {
              duration: 0.75,
              ease: "easeOut"
            },
        },
    };

    const letters = ["C", "O", "N", "T", "A", "C", "T"]

    return (
        <h2 className='contact-header text-[#e983d8] mb-5 mt-20'>
            {letters.map((letter, index) => (
                <motion.div
                    initial={isInView ? "initial" : "whileInView"}
                    animate="whileInView"
                    {...transitionVariants[letter]} 
                    key={letter + index}
                >
                    {letter}
                </motion.div>
            ))}
        </h2>
    )
}