import { useContext } from 'react'

import { TokenContext } from '../contexts/TokenProvider'

export function useToken() {
  const context = useContext(TokenContext)
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider')
  }
  return context
}
