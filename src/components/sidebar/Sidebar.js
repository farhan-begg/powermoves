import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import lion from '../../images/lion.png'
import Menuitem from './Menuitem'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"


const menuItems = [
    { name: 'Dashboard', to: '/', iconClassName: 'bi bi-speedometer2'},
    {
        name: 'Content', to: '/content',
        iconClassName: "bi bi-newspaper",

        subMenus: [{ name: "Courses" }, { name: "Videos" }],
    },

    { name: 'Design', to: '/design', iconClassName: 'bi bi-vector-pen'},



]

const Sidebar = () => {

    const [inactive, setInactive] = useState(false)

    useEffect(() => {
        if(inactive){
            document.querySelectorAll('.sub-menu').forEach(el => {
                el.classList.remove('active')
            })

        }
    })


    return (

        <div className={`side-menu ${inactive ? 'inactive' : ''}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={lion} alt="Power Moves" />
                </div>
                <div
                    onClick={() =>
                        setInactive(!inactive)}
                    className="toggle-menu-btn"

                >
                    {inactive ?
                        <i class="bi bi-arrow-right-square-fill"></i>
                        :
                        <i class="bi bi-arrow-left-square-fill"></i>
                    }
                </div>

            </div>

            <div className="search-controller">
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder="search" />
            </div>
            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    {menuItems.map((menuitem, index) => (
                        <Menuitem
                        key={index}
                        name={menuitem.name}
                        to={menuitem.to}
                        subMenus={menuitem.subMenus || []}
                        iconClassName={menuitem.iconClassName}
                        onClick={() => {
                            if(inactive)
                            setInactive(false);
                        }}
                        />
                    ))}
                    {/* <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-speedometer2"></i>
                            </div>
                            <span>Dashboard</span>

                        </a>
                    </li>
                    <Menuitem
                        name={"Content"}
                        subMenus={[
                            { name: 'Courses' },
                            { name: 'Videos' }
                        ]}

                    />


                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-vector-pen"></i>
                            </div>
                            <span>Design</span>
                        </a>
                    </li>
 */}


                </ul>
            </div>

            <div className="side-menu-footer">
                <div className="avatar">
                    <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" alt="user" />
                </div>
                <div className="user-info">
                    <h5>Farhan Begg</h5>
                </div>
            </div>

        </div>


    )
}

export default Sidebar
