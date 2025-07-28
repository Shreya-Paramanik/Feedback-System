import { useState } from 'react'
// import './App.css'
import Header from './Components/Welcome/Header'
import Card from './Components/Welcome/Card'
import StatisticalCard from './Components/Welcome/StatisticalCard'
import Welcome from './Components/Welcome/Welcome'
import FeedbackDash from './Components/Admin_Panel/FeedbackDash'
import AdminPanel from './Components/Admin_Panel/AdminPanel'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='app-gradient'>
      <AdminPanel/>
    </div>
  )
}

export default App
