import React,{useState, useMemo} from 'react'

function Memouse() {
  const [count, setCount] = useState(0);
  const doubled = useMemo(()=> {
    return count * 5;
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Memouse
