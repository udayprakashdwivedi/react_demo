import { useDebugValue, useState } from 'react'

const Usedebugvalue = () => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(value > 10 ? 'Big Value' : 'Small Value');
  return [value, setValue];

}

export default Usedebugvalue

