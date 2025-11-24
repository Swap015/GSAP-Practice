import gsap from 'gsap';
import { useEffect, useRef } from 'react'

const Two = () => {
    const textRef = useRef(null);

    useEffect(() => {

        gsap.to(textRef.current, {
            opacity: 1,
            duration: 2,
            delay: 1

        })

    }, [])

    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div ref={textRef} className="text-6xl font-bold text-white opacity-0">Welcome Guys</div>

        </div>
    )
}

export default Two;