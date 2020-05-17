import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import ProgressBar from './components/ProgressBar'
import Questions from './components/Questions'

function App() {
  const [page, setPage] = useState(1)

  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <ProgressBar page={page} />
        <Questions />
      </div>
    </div>
  )
}

export default App
