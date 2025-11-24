import gsap from "gsap";
import { useEffect, useRef } from "react"


const Three = () => {

    const circleRef = useRef(null);

    useEffect(() => {
        gsap.to(circleRef.current, {
            scale: 0,
            duration: 2,
            delay: 1,
            rotate: 720
        })

    }, [])


    return (
        <div className="flex justify-center items-center p-40">
            <div ref={circleRef} className="flex justify-center items-center w-40 h-40 bg-green-500 rounded-md">+</div>
        </div>
    )
}

export default Three