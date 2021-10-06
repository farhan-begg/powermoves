import React from 'react'
import './Sidebar.css'
import lion from '../../images/lion.png'
const Sidebar = () => {
    return (
        <div className="sidebar_body" >
            <ul className="sidebar_titles">
                <li className="image">

                    <img className="lion_logo" src={lion} alt="Power Moves" />
                </li>
                <li>Dashboard</li>
                <li>Goals</li>
                <li>Lorem</li>
                <li>Account</li>
           
            </ul>
 
        </div>
    )
}

export default Sidebar
