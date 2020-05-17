import React from 'react'
import './index.css'

interface SidebarProps {
  petName?: string
}

const Sidebar = ({ petName = 'Butterball' }: SidebarProps) => {
  const sidebarText = `Answer 20 questions to find out the personality type for ${petName}`
  return (
    <div className="sidebar">
      <div className="sidebar__title-container">
        <h3 className="sidebar__title">Quiz</h3>
        <p className="sidebar__text">{sidebarText}</p>
      </div>
    </div>
  )
}

export default Sidebar
