import React from 'react'

const SidebarOption = ({icon, name, active}) => {
  return (
    <div className={`sidebar-option ${active?'active':''}`} >
       {icon}
       <p>
        {name}
       </p>
    </div>
  )
}

export default SidebarOption;
