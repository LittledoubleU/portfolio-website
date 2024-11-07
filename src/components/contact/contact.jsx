import './contact.css'
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function Contact() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    // Debug
    useEffect(() => {
        console.log("Contact is in view: ", isInView)
    }, [isInView]);

    return (
        <section className="w-full h-auto flex flex-col justify-center items-center mt-40">
            <div className="contact-container relative" ref={ref} id="Contact">
                <button></button>
            </div>
        </section>
    )
}