import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Sidebar from './components/Sidebar'
import ProgressBar from './components/ProgressBar'

function App() {
  const [isSelected, setIsSelected] = useState(false)
  const [page, setPage] = useState(1)

  return (
    <div className="app">
      <Sidebar />
      <div className="questions">
        <ProgressBar page={page} />
        <Button
          onClick={() => setIsSelected(!isSelected)}
          title="Click me"
          isSelected={isSelected}
        />
      </div>
    </div>
  )
}

export default App
