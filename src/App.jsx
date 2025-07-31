import { useState } from 'react'
import { Route,Routes,BrowserRouter, useNavigate } from 'react-router-dom'
// import './App.css'
import Header from './Components/Welcome/Header'
import Card from './Components/Welcome/Card'
import StatisticalCard from './Components/Welcome/StatisticalCard'
import Welcome from './Components/Welcome/Welcome'
import FeedbackTable from './Components/Dashboard/FeedbackTable'
import StatsCards from './Components/Dashboard/StatsCard'
import AdminLogin from './Components/Admin_Login/AdminLogin'
import DashboardHeader from './Components/Dashboard/DashboardHeader'
import ThankYouPage from "./Components/ThankYou/thankYouPage"
import Submit from './Components/SubmitFeedback/Submit'
function App() {
  //const [count, setCount] = useState(0)

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        
        <Route path="/SubmitFeedback" element={<Submit/>}></Route>

        <Route path='/thankYou' element={<ThankYouPage/>}></Route>

        <Route path='adminLogin' element={<AdminLogin/>}></Route>

        <Route path='Dashboard' element={<DashboardHeader/>}></Route>

      </Routes>
    </BrowserRouter>

  
      
    
  )
}

export default App
