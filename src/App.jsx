import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const App = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 700,
      backgroundColor: "red",
      rotate: 720,
      duration: 2,
      delay: 1
    })
  }, [])
  return (
    <div className='min-h-screen bg-gray-500 border-black p-20'>
      <div ref={boxRef} className="w-40 h-40 bg-yellow-500"></div>
    </div>
  )
}

export default App;