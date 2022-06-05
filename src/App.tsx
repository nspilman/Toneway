import { useEffect, useState } from 'react'
import './App.css'
import { ImageCanvas } from "./components/ImageCanvas"

function App() {
  const [largestStroke, setLargestStroke] = useState(4)
  useEffect(() => {
  }, [largestStroke])
  return (
    <div className="App">
      <input type="range" value={largestStroke} min={1} max={20} onChange={(e) => setLargestStroke(JSON.parse(e.currentTarget.value))} />
      <ImageCanvas largestStroke={largestStroke} shrinkRate={6} />
    </div>
  )
}

export default App
