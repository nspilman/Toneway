import { useEffect, useState } from 'react'
import './App.css'
import { ImageCanvas } from "./components/ImageCanvas"
import { InputsController } from './components/ImageCanvas/InputsControlller'
import { ImageInputProvider } from './context/useImageCanvas/useImageCanvasContext'

function App() {
  return (
    <div className="App">
      <ImageInputProvider>
        <InputsController />
        <ImageCanvas shrinkRate={1} />
      </ImageInputProvider>
    </div>
  )
}

export default App
