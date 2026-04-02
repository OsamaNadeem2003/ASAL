import { useState } from 'react'
import './App.css'
import Counter from './tasks/Counter'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  const [count9, setCount9] = useState(0);

  let total = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9;

  return (
    <>
      <h1>Total Of Counters = {total}</h1>

      <div>
        <Counter value={count1} setValue={setCount1} />
        <Counter value={count2} setValue={setCount2} />
        <Counter value={count3} setValue={setCount3} />
        <Counter value={count4} setValue={setCount4} />
        <Counter value={count5} setValue={setCount5} />
        <Counter value={count6} setValue={setCount6} />
        <Counter value={count7} setValue={setCount7} />
        <Counter value={count8} setValue={setCount8} />
        <Counter value={count9} setValue={setCount9} />
      </div>
    </>
  )
}

export default App