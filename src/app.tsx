import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { memoryUsedTokens } from './memoryUsedTokens'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Rating } from './pages/Rating'
import { Thanks } from './pages/Thanks'
import { TokenRoutes } from './pages/TokenRoutes'

export function App() {
  console.log({ memoryUsedTokens })

  return (
    <BrowserRouter>
      {/* ... */}
      <Routes>
        <Route element={<TokenRoutes />}>
          <Route path="/avaliacao/:token" element={<Rating />} />
          <Route path="thanks" element={<Thanks />} />
        </Route>

        <Route path="/" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
