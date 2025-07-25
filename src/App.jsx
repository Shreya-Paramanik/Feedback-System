import { useState } from 'react'
import './App.css'
import Header from './Components/Welcome/Header'
import Card from './Components/Welcome/Card'
import StatisticalCard from './Components/Welcome/StatisticalCard'
import Welcome from './Components/Welcome/Welcome'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='app-gradient'>
      <Welcome/>
    </div>
  )
}

export default App
