import React from 'react'
import "./CompanyDashboard.css"

interface Props {}

const CompanyDashbord = (props: Props) => {
  return (
    <div className="header">
         <div className="header-content">
           <div className="stats">
             <div className="stat-item">
               <div className="stat-content">
                 <h5>Traffic</h5>
                 <span className="stat-value">350,897</span>
               </div>
             </div>
   
             <div className="stat-item">
               <div className="stat-content">
                 <h5>NEW USERS</h5>
                 <span className="stat-value">2,356</span>
               </div>
             </div>
   
             <div className="stat-item">
               <div className="stat-content">
                 <h5>SALES</h5>
                 <span className="stat-value">924</span>
               </div>
             </div>
   
             <div className="stat-item">
               <div className="stat-content">
                 <h5>PERFORMANCE</h5>
                 <span className="stat-value">49,65%</span>
               </div>
             </div>
           </div>
         </div>
       </div>
  )
}

export default CompanyDashbord