import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TokenProvider } from './contexts/TokenProvider'
import { memoryUsedTokens } from './memoryUsedTokens'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Rating } from './pages/Rating'
import { Thanks } from './pages/Thanks'

export function App() {
  console.log({ memoryUsedTokens })
  return (
    <BrowserRouter>
      <TokenProvider>
        {/* ... */}
        <Routes>
          <Route path="/avaliacao/:token" element={<Rating />} />
          <Route path="thanks" element={<Thanks />} />

          <Route path="/" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  )
}
