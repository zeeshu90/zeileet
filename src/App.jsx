import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import AccountDeletionRequestPage from './pages/AccountDeletionRequestPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/account-deletion-request" element={<AccountDeletionRequestPage />} />
      <Route path="/delete-account" element={<Navigate to="/account-deletion-request" replace />} />
      <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
      <Route path="/founder" element={<Navigate to="/#founder" replace />} />
      <Route path="/lets-talk" element={<Navigate to="/#hey-there" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
