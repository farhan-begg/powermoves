import React from 'react'
import './Dashboard.css'
import IncomeForm from '../components/incomeform/IncomeForm'
import Sidebar from '../components/sidebar/Sidebar'
import Tracker from '../components/tracker/Tracker'
import List from '../components/main/list/List';
import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'

import Details from '../components/details/Details'
import Main from '../components/main/Main'

const Dashboard = () => {
    return (

     <div className="dashboard_layout">     
        <div className="sidebar">
        <Sidebar />
        </div>
        <div className="main">
            <Main />
            </div>
            <div className="charts">
            <div className="graph">
            <Details title="Income" />
            <Details title="Expense" />
        
          </div>
        <div className="tracker">
          <Tracker  title="Income"  />
          {/* <Tracker  title="Expense"  /> */}
          </div>
            </div>
        

        
   
        </div>
  
      
    )
}

export default Dashboard
