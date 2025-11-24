import gsap from "gsap";
import { useEffect, useRef } from "react";


const Four = () => {
    const boxRef = useRef(null);

    useEffect(() => {

        gsap.to(boxRef.current, {
            rotate: 720,
            duration: 2
        })

    }, [])


    return (
        <div className="flex justify-center items-center">
            <div ref={boxRef} className="bg-violet-400 w-40 h-40">

            </div>
        </div>
    )
}

export default Four;