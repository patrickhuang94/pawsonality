import React from 'react'
import './index.css'

interface ProgressBarProps {
  page: number
}

const ProgressBar = ({ page }: ProgressBarProps) => {
  const progressWidth = (page / 5) * 100
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__filler"
        style={{ width: `${progressWidth}%` }}
      />
    </div>
  )
}

export default ProgressBar
