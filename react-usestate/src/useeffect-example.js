import React, { useEffect, useState } from 'react'

function UseEffectExample() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const handleMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      console.log("pointer move event");

    }

    console.log("addEventListener add for pointermove");

    window.addEventListener("pointermove", handleMove)

    // clen up function
    // return window.removeEventListener("pointermove", handleMove);

  }, [])

  return (
    <div>x:{cursorPosition.x}, y:{cursorPosition.y}</div>
  )
}

export default UseEffectExample