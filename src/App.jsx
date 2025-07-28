import { useState } from 'react'
// import './App.css'
import Header from './Components/Welcome/Header'
import Card from './Components/Welcome/Card'
import StatisticalCard from './Components/Welcome/StatisticalCard'
import Welcome from './Components/Welcome/Welcome'
import FeedbackDash from './Components/Admin_Panel/FeedbackDash'
import AdminLogin from './Components/Admin_Login/AdminLogin'
import AdminPanel from './Components/Admin_Panel/AdminPanel';
import ThankYouPage from "./Components/ThankYou/thankYouPage"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Welcome/>
    </div>
  )
}

export default App
