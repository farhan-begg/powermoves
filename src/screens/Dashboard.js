import React from 'react'
import './Dashboard.css'
import IncomeForm from '../components/incomeform/IncomeForm'
import Sidebar from '../components/sidebar/Sidebar'
import Tracker from '../components/tracker/Tracker'

const Dashboard = () => {
    return (

        <div className="container">
   
        <div className="container_sidebar">
            <Sidebar />
        </div>
   
        <div className="container_main">
            <div className= "component_layout">
            <IncomeForm />
            <div className="dashboard_tracker">
            <Tracker />
            </div>
            </div>
      
            
           
        </div>
      
    </div>
    )
}

export default Dashboard
