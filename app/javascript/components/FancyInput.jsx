import React,{useRef, useImperativeHandle} from 'react'

function FancyInput(props, ref) {

  const inputRef = useRef();

  useImperativeHandle(ref, ()=> ({
    focus: () => {
      inputRef.current.focus();
    }

  }))

  return <input ref={inputRef} />;
}

FancyInput = React.forwardRef(FancyInput);

export default FancyInput;
