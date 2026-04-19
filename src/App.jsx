import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/founder" element={<Navigate to="/#founder" replace />} />
      <Route path="/lets-talk" element={<Navigate to="/#hey-there" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
