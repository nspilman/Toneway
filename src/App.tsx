import './App.css'
import { ImageCanvas } from "./components/ImageCanvas"
import { InputsController } from './components/ImageCanvas/InputsController'
import { ImageInputProvider } from './context/useImageCanvas/useImageInputContext'

function App() {
  return (
    <div className="App">
      <ImageInputProvider>
        <InputsController />
        <ImageCanvas />
      </ImageInputProvider>
    </div>
  )
}

export default App
