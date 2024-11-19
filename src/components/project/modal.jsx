import { motion } from "framer-motion";

export default function CardModal(props) {

    const {selectedCard ,setSelectedCard} = props;

    return (
        <motion.div className="bg bg-black card-modal">
            <div className="w-full h-full flex flex-col justify-center flex-1">
                <div className="h-1/2">
                    <img src="" alt="" />
                </div>
                <div className="detail grid grid-cols-3 grid-rows-2 h-1/2">
                    <div className="bg-blue-700 row-span-2">
                        <div className="w-full pt-10 ps-5">
                            <h2 className="text-2xl">
                                {selectedCard.content.header}
                            </h2>
                            <p className="">
                                {selectedCard.thumbnail.description}
                            </p>
                        </div>
                    </div>
                    <div className="bg-purple-500">

                    </div>
                    <div className="bg-green-500">

                    </div>
                    <div className="bg-red-700 col-span-2">

                    </div>
                </div>
            </div>
            <button 
                className="w-1/12 aspect-square absolute right-0 top-0"
                onClick={() => (setSelectedCard(null))}
            >
                X
            </button>
        </motion.div>
    )
}