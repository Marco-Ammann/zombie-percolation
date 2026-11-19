import './App.css'
import { createGrid } from './simulation/grid'

function App() {
  const initialGrid = createGrid(10, 10, 0.5)

  return (
    <div className="App">
      <h1>Zombie Percolation Simulation</h1>
      <p>Initial Grid:</p>
      <pre>{JSON.stringify(initialGrid, null, 2)}</pre>
    </div>
  )
}

export default App
