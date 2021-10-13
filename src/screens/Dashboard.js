import React from 'react'
import './Dashboard.css'
import IncomeForm from '../components/incomeform/IncomeForm'
import Sidebar from '../components/sidebar/Sidebar'
import Tracker from '../components/tracker/Tracker'
import Progressbar from '../components/progressbar/Progressbar'

const Dashboard = () => {
    return (

        <div className="dashboard_layout">
            <Sidebar />

            <IncomeForm />
            <Tracker />





        </div>
    )
}

export default Dashboard
