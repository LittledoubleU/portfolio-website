import { useState } from "react";
import portfolio from "./certiWork";

export default function SliderCertiWork(props) {
    const section = props.section;
    const port = portfolio[section];

    const [sliderIndex, setSliderIndex] = useState(0);

    return (
        <div className="w-full h-full">
            <div className="w-full h-full relative">
                <div className="bg sec overflow-hidden">
                    <img src={port[sliderIndex].img} alt="bg img" className="absolute top-0" />
                </div>
            </div>
        </div>
    )
}