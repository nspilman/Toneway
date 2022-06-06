import { useEffect, useState } from 'react'
import './App.css'
import { ImageCanvas } from "./components/ImageCanvas"

function App() {
  const [largestStroke, setLargestStroke] = useState(4)
  const [playAudio, setPlayAudio] = useState(false)
  useEffect(() => {
  }, [largestStroke])
  useEffect(() => {
  }, [playAudio])
  return (
    <div className="App">
      <input type="range" value={largestStroke} min={1} max={20} onChange={(e) => setLargestStroke(JSON.parse(e.currentTarget.value))} />
      <br />
      <input type="button" value={playAudio ? "Stop" : "Play"} onClick={() => setPlayAudio(!playAudio)} />
      <ImageCanvas largestStroke={largestStroke} shrinkRate={6} playAudio={playAudio} />
    </div>
  )
}

export default App
