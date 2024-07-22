import React, { useRef } from 'react';
import FancyInput from './FancyInput';

 
function Useimperativehandle() {
  const fancyInputRef = useRef();

  const handleClick = () => {
    fancyInputRef.current.focus();
  };

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default Useimperativehandle;