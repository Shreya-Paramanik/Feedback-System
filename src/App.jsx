import { useState } from 'react'
import { Route,Routes,BrowserRouter, useNavigate } from 'react-router-dom'
// import './App.css'
import Header from './Components/Welcome/Header'
import Card from './Components/Welcome/Card'
import StatisticalCard from './Components/Welcome/StatisticalCard'
import Welcome from './Components/Welcome/Welcome'
import FeedbackDash from './Components/Admin_Panel/FeedbackDash'
import AdminLogin from './Components/Admin_Login/AdminLogin'
import AdminPanel from './Components/Admin_Panel/AdminPanel';
import ThankYouPage from "./Components/ThankYou/thankYouPage"
import Submit from './Components/SubmitFeedback/Submit'
function App() {
  //const [count, setCount] = useState(0)

  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        
        <Route path="/SubmitFeedback" element={<Submit/>}></Route>

        <Route path='/thankYou' element={<ThankYouPage/>}></Route>

        <Route path='adminLogin' element={<AdminLogin/>}></Route>

        <Route path='Dashboard' element={<AdminPanel/>}></Route>

      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
