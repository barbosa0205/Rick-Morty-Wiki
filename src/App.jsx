import { useState } from 'react'
import { MainRoutes } from './routers/MainRoutes'

function App() {
  const [count, setCount] = useState(0)

  return <MainRoutes />
}

export default App
