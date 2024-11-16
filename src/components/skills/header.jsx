import { motion } from "framer-motion"

export default function SkillHeader(props) {
    const isInView = props.view


const pathVariants = {
    hidden: { 
        fill: "rgba(255,255,255,0)"
    },
    visible: { 
        fill: "rgba(255,255,255,1)",
        transition: { duration: 2 }
    },
};

    return (
        <motion.svg viewBox="0 0 563 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={pathVariants}
            d="M112.5 38H131.25V56.75H112.5V38ZM93.75 38H112.5V56.75H93.75V38ZM93.75 19.25H112.5V38H93.75V19.25ZM112.5 19.25H131.25V38H112.5V19.25ZM93.75 0.500006H112.5V19.25H93.75V0.500006ZM75 0.500006H93.75V19.25H75V0.500006ZM75 19.25H93.75V38H75V19.25ZM56.25 19.25H75V38H56.25V19.25ZM37.5 19.25H56.25V38H37.5V19.25ZM37.5 0.500006H56.25V19.25H37.5V0.500006ZM18.75 0.500006H37.5V19.25H18.75V0.500006ZM56.25 0.500006H75V19.25H56.25V0.500006ZM18.75 19.25H37.5V38H18.75V19.25ZM0 19.25H18.75V38H0V19.25ZM0 38H18.75V56.75H0V38ZM18.75 38H37.5V56.75H18.75V38ZM18.75 56.75H37.5V75.5H18.75V56.75ZM18.75 75.5H37.5V94.25H18.75V75.5ZM0 75.5H18.75V94.25H0V75.5ZM0 56.75H18.75V75.5H0V56.75ZM18.75 94.25H37.5V113H18.75V94.25ZM37.5 94.25H56.25V113H37.5V94.25ZM37.5 75.5H56.25V94.25H37.5V75.5ZM56.25 75.5H75V94.25H56.25V75.5ZM75 75.5H93.75V94.25H75V75.5ZM93.75 75.5H112.5V94.25H93.75V75.5ZM93.75 94.25H112.5V113H93.75V94.25ZM75 94.25H93.75V113H75V94.25ZM56.25 94.25H75V113H56.25V94.25ZM112.5 94.25H131.25V113H112.5V94.25ZM112.5 113H131.25V131.75H112.5V113ZM93.75 113H112.5V131.75H93.75V113ZM75 150.5H93.75V169.25H75V150.5ZM93.75 150.5H112.5V169.25H93.75V150.5ZM93.75 131.75H112.5V150.5H93.75V131.75ZM112.5 131.75H131.25V150.5H112.5V131.75ZM112.5 150.5H131.25V169.25H112.5V150.5ZM93.75 169.25H112.5V188H93.75V169.25ZM75 169.25H93.75V188H75V169.25ZM56.25 169.25H75V188H56.25V169.25ZM37.5 169.25H56.25V188H37.5V169.25ZM18.75 169.25H37.5V188H18.75V169.25ZM18.75 150.5H37.5V169.25H18.75V150.5ZM37.5 150.5H56.25V169.25H37.5V150.5ZM56.25 150.5H75V169.25H56.25V150.5ZM0 150.5H18.75V169.25H0V150.5ZM0 131.75H18.75V150.5H0V131.75ZM18.75 131.75H37.5V150.5H18.75V131.75ZM150.049 0.500006H168.799V19.25H150.049V0.500006ZM168.799 0.500006H187.549V19.25H168.799V0.500006ZM168.799 19.25H187.549V38H168.799V19.25ZM168.799 38H187.549V56.75H168.799V38ZM168.799 56.75H187.549V75.5H168.799V56.75ZM150.049 56.75H168.799V75.5H150.049V56.75ZM150.049 38H168.799V56.75H150.049V38ZM150.049 19.25H168.799V38H150.049V19.25ZM150.049 75.5H168.799V94.25H150.049V75.5ZM150.049 94.25H168.799V113H150.049V94.25ZM150.049 113H168.799V131.75H150.049V113ZM150.049 131.75H168.799V150.5H150.049V131.75ZM150.049 150.5H168.799V169.25H150.049V150.5ZM150.049 169.25H168.799V188H150.049V169.25ZM168.799 169.25H187.549V188H168.799V169.25ZM168.799 150.5H187.549V169.25H168.799V150.5ZM168.799 131.75H187.549V150.5H168.799V131.75ZM168.799 113H187.549V131.75H168.799V113ZM168.799 94.25H187.549V113H168.799V94.25ZM168.799 75.5H187.549V94.25H168.799V75.5ZM187.549 94.25H206.299V113H187.549V94.25ZM206.299 94.25H225.049V113H206.299V94.25ZM206.299 75.5H225.049V94.25H206.299V75.5ZM225.049 75.5H243.799V94.25H225.049V75.5ZM225.049 56.75H243.799V75.5H225.049V56.75ZM225.049 38H243.799V56.75H225.049V38ZM243.799 38H262.549V56.75H243.799V38ZM243.799 56.75H262.549V75.5H243.799V56.75ZM206.299 113H225.049V131.75H206.299V113ZM225.049 113H243.799V131.75H225.049V113ZM243.799 131.75H262.549V150.5H243.799V131.75ZM225.049 131.75H243.799V150.5H225.049V131.75ZM225.049 150.5H243.799V169.25H225.049V150.5ZM243.799 150.5H262.549V169.25H243.799V150.5ZM243.799 169.25H262.549V188H243.799V169.25ZM225.049 169.25H243.799V188H225.049V169.25ZM281.299 0.500006H318.799V38H281.299V0.500006ZM281.299 56.75H318.799V188H281.299V56.75ZM337.695 0.500006H356.445V19.25H337.695V0.500006ZM356.445 0.500006H375.195V19.25H356.445V0.500006ZM356.445 19.25H375.195V38H356.445V19.25ZM356.445 38H375.195V56.75H356.445V38ZM356.445 56.75H375.195V75.5H356.445V56.75ZM356.445 75.5H375.195V94.25H356.445V75.5ZM356.445 94.25H375.195V113H356.445V94.25ZM337.695 94.25H356.445V113H337.695V94.25ZM337.695 113H356.445V131.75H337.695V113ZM337.695 131.75H356.445V150.5H337.695V131.75ZM337.695 150.5H356.445V169.25H337.695V150.5ZM337.695 169.25H356.445V188H337.695V169.25ZM356.445 169.25H375.195V188H356.445V169.25ZM356.445 150.5H375.195V169.25H356.445V150.5ZM356.445 131.75H375.195V150.5H356.445V131.75ZM356.445 113H375.195V131.75H356.445V113ZM337.695 75.5H356.445V94.25H337.695V75.5ZM337.695 56.75H356.445V75.5H337.695V56.75ZM337.695 38H356.445V56.75H337.695V38ZM337.695 19.25H356.445V38H337.695V19.25ZM394.092 0.500006H412.842V19.25H394.092V0.500006ZM412.842 0.500006H431.592V19.25H412.842V0.500006ZM412.842 19.25H431.592V38H412.842V19.25ZM412.842 38H431.592V56.75H412.842V38ZM412.842 56.75H431.592V75.5H412.842V56.75ZM412.842 75.5H431.592V94.25H412.842V75.5ZM412.842 94.25H431.592V113H412.842V94.25ZM394.092 94.25H412.842V113H394.092V94.25ZM394.092 113H412.842V131.75H394.092V113ZM394.092 131.75H412.842V150.5H394.092V131.75ZM394.092 150.5H412.842V169.25H394.092V150.5ZM394.092 169.25H412.842V188H394.092V169.25ZM412.842 169.25H431.592V188H412.842V169.25ZM412.842 150.5H431.592V169.25H412.842V150.5ZM412.842 131.75H431.592V150.5H412.842V131.75ZM412.842 113H431.592V131.75H412.842V113ZM394.092 75.5H412.842V94.25H394.092V75.5ZM394.092 56.75H412.842V75.5H394.092V56.75ZM394.092 38H412.842V56.75H394.092V38ZM394.092 19.25H412.842V38H394.092V19.25ZM450.488 56.75H469.238V75.5H450.488V56.75ZM469.238 75.5H487.988V94.25H469.238V75.5ZM450.488 75.5H469.238V94.25H450.488V75.5ZM450.488 94.25H469.238V113H450.488V94.25ZM469.238 94.25H487.988V113H469.238V94.25ZM469.238 113H487.988V131.75H469.238V113ZM487.988 113H506.738V131.75H487.988V113ZM506.738 113H525.488V131.75H506.738V113ZM525.488 94.25H544.238V113H525.488V94.25ZM506.738 94.25H525.488V113H506.738V94.25ZM487.988 94.25H506.738V113H487.988V94.25ZM525.488 113H544.238V131.75H525.488V113ZM544.238 113H562.988V131.75H544.238V113ZM544.238 131.75H562.988V150.5H544.238V131.75ZM525.488 131.75H544.238V150.5H525.488V131.75ZM525.488 150.5H544.238V169.25H525.488V150.5ZM544.238 150.5H562.988V169.25H544.238V150.5ZM525.488 169.25H544.238V188H525.488V169.25ZM506.738 150.5H525.488V169.25H506.738V150.5ZM487.988 150.5H506.738V169.25H487.988V150.5ZM469.238 150.5H487.988V169.25H469.238V150.5ZM450.488 150.5H469.238V169.25H450.488V150.5ZM469.238 169.25H487.988V188H469.238V169.25ZM487.988 169.25H506.738V188H487.988V169.25ZM506.738 169.25H525.488V188H506.738V169.25ZM544.238 56.75H562.988V75.5H544.238V56.75ZM525.488 56.75H544.238V75.5H525.488V56.75ZM525.488 38H544.238V56.75H525.488V38ZM506.738 38H525.488V56.75H506.738V38ZM487.988 38H506.738V56.75H487.988V38ZM469.238 38H487.988V56.75H469.238V38ZM469.238 56.75H487.988V75.5H469.238V56.75ZM487.988 56.75H506.738V75.5H487.988V56.75ZM506.738 56.75H525.488V75.5H506.738V56.75Z" fill="white"/>
        </motion.svg>
    )
}