import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import {FaHome} from "react-icons/fa";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <nav className="sidebar">
       <button className="sidebar-toggle">
         <i className="fas fa-ellipsis-v"></i>
       </button>
       <div className="sidebar-content">
         <div className="sidebar-section">
           <Link to="company-profile">
            <FaHome />
            <h6>Company profile</h6>
           </Link>

           <Link to="income-statement">
            <FaHome />
            <h6>Income statement</h6>
           </Link>
         </div>
       </div>
     </nav>
  )
}

export default Sidebar