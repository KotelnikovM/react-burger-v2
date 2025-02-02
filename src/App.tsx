import { useState } from 'react'
import './App.css'
import { Tab } from './yandex-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tab onClick={() => setCount(count + 1)} active value='one'>
        {count}
      </Tab>
      <Tab onClick={() => setCount(count + 1)} active value='one'>
        {count}
      </Tab>
    </>
  )
}

export default App
