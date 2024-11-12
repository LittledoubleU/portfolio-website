import './contact.css'
import { useRef, useEffect, useState, Component } from 'react';
import { useInView, motion } from 'framer-motion';
import ContactHeader from './header';
import ListIcon from '../icon/icon';
import {FacebookIcon, GithubIcon, LinkedInIcon, EmailIcon, XIcon} from '../icon/icon';

export default function Contact() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const [isCompleted, setIsCompleted] = useState(false)

    // Debug
    useEffect(() => {
        if (isInView === false) {
            setIsOpened(false);
        }
        console.log(isCompleted)
        console.log("Contact is in view: ", isInView)
    }, [isInView]);

    const [isOpened, setIsOpened] = useState(false);

    function btnMainVariant() {
        return (
            {
                initial: {
                    opacity: 0,
                    x: "-50%",
                    y: "50%",
                    scale: 1
                },
                animate: {
                    opacity: isInView?1:0,
                    x: "-50%",
                    y: isInView?"-50%":"50%",
                    scale: isInView?[1.25, 1]:1,
                    transition: {
                        duration: 0.45,
                        type: "spring",
                        stiffness: 200,
                        scale: {
                            duration: 0.25,
                            delay: 0.1,
                            ease: "easeIn",
                            type: "spring", 
                            stiffness: 200
                        }
                    }
                }, 
                whileTap: {
                    scale: 0.85,
                    duration: 0.5
                }
            }
        )
    }

    const btnContentVariant = (deg) => ({
        open: {
            scale: [0.25, 1.5, 1.5, 1],
            rotate: deg,
            width: "40%",
            transition: {
                duration: 0.45,
                type: "spring",
                stiffness: 75
            }
        },
        close: {
            scale: 0,
            rotate: 0,
            width: 0,
            transition: {
                duration: 0.45
            }
        }
    })

    const content = [{
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
        name: "gmail",
        rotate: '495deg',
        component: EmailIcon,
        href: "mailto:sukhum.phonnopparat@gmail.com?subject=Internship%20Confirmation&body=Dear%20Sukhum%2C%0A%0AWe%20are%20pleased%20to%20confirm%20your%20internship%20offer.%20We%20look%20forward%20to%20having%20you%20on%20board.%0A%0ABest%20regards%2C%0A[Your%20Name]%0A[Your%20Position]%0A[Company%20Name]" //lmao
    },
    {
        name: "linkedIn",
        rotate: '405deg',
        component: LinkedInIcon,
        href: "https://www.linkedin.com/in/sukhum-phonnopparat-6718a729a/"
    }]

    return (
        <section className="w-full h-auto flex flex-col justify-center items-center mt-40">
            <ContactHeader />
            <div className="contact-container relative" ref={ref} id="Contact">
                <motion.a className='rounded-full w-16 h-16 bg-[#e983d8] main-btn flex justify-center items-center'
                onClick={() => setIsOpened(!isOpened)}
                {...btnMainVariant()}
                >
                    <ListIcon />
                </motion.a>
                {isOpened && 
                    content.map((item, index) => (
                        <motion.div className={`${item.name} absolute w-2/5 h-1`} 
                            key={index}
                            initial={"close"}
                            animate={isOpened ? "open": "close"}
                            variants={btnContentVariant(item.rotate)}
                            whileTap={{
                                opacity: 0.55
                            }}
                        >
                            <a className='rounded-full w-16 h-16 bg-[#e983d8] flex justify-center items-center' href={item.href} target="_blank" rel="noopener noreferrer">
                                <item.component />
                            </a>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}