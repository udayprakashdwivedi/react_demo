// ResizeComponent

import React,{useState, useLayoutEffect} from 'react'

const Uselayouteffect = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return <div>window width: {width}</div>;
  
}

export default Uselayouteffect
