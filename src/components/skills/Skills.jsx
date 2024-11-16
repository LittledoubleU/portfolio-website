import "./skills.css"
import { useInView, motion, animate } from "framer-motion";
import { useRef, useEffect } from "react"
import SkillHeader from "./header";

export default function Skill() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    // const [scope, animate] = useAnimate()

    // async function handleAnimate() {
    //     // Set initial values
    //     await Promise.all([
    //         animate("#building-1", { minWidth: "248%" }, { duration: 0 }),
    //         animate("#building-2", { minWidth: "248%", x: "-50%", y: "10%" }, { duration: 0 })
    //     ]);
    
    //     // Animate both elements simultaneously
    //     await Promise.all([
    //         animate("#building-1", { minWidth: "100%" }, { duration: 2.25 }),
    //         animate("#building-2", { minWidth: "100%", x: "-50%", y: "0%" }, { duration: 1.5 })
    //     ]);
    // }

    const durationTime = 2.25

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
    

    useEffect(() => {
        console.log("Skills is in view: ", isInView)
    }, [isInView]);

    return (
        <section className="w-full h-auto flex flex-col justify-center items-center mt-40">
            <div className="skill-container relative" ref={ref}>
                <div className="bg">
                    <motion.img src="./src/assets/img/cyberpunkBG.svg" alt="bg" id="cyberpunk-bg" 
                    variants={buildingVariant3}
                    initial={"initial"}
                    animate={isInView?"animate":"initial"}/>
                    <motion.img src="./src/assets/img/cyberpunkBuilding2.svg" alt="building 2" id="building-2" 
                    variants={buildingVariant2}
                    initial={"initial"}
                    animate={isInView?"animate":"initial"}/>
                    <motion.img src="./src/assets/img/cyberpunkBuilding1.svg" alt="building 1" id="building-1" 
                    variants={buildingVariant1}
                    initial={"initial"}
                    animate={isInView?"animate":""}
                    />
                    <SkillHeader view={isInView}/>
                </div>
            </div>
        </section>
    )
}