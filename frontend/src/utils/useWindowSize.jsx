import React, { useEffect, useState } from 'react';


function useWindowSize() {
    const [size, setSize] = useState([0,0]);
    useEffect(()=>{
        const updateSize = ()=>{
            setSize([Window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize);
        return ()=> window.removeEventListener('resize', updateSize)
    },[])
  return {
    width: size[0],
    height: size[1]
  }
}

export default useWindowSize