import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'
import StatisticalCard from './Components/StatisticalCard'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center', gap:'1rem',height:'300px'}}>
        <Card/>
        <Card/>
      </div>

      <div style={{display:'flex',justifyContent:'center',alignContent:'center',gap:'1rem'}}>
        <StatisticalCard/>
        <StatisticalCard/>
        <StatisticalCard/>
      </div>
    </>
  )
}

export default App
