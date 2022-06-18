import './App.css'
import { ImageCanvas } from "./components/ImageCanvas"
import { InputsController } from './components/ImageCanvas/InputsControlller'
import { ImageInputProvider } from './context/useImageCanvas/useImageInputContext'

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
