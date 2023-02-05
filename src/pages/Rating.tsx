import { useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import { useToken } from '../hooks/useToken'

export function Rating() {
  const { token } = useParams()
  const navigate = useNavigate()
  const { isLoading, validateToken, updateTokenAsUsed } = useToken()

  const handleUpdateTokenAsUsed = async () => {
    await updateTokenAsUsed(token)
  }

  useEffect(() => {
    validateToken(token)
  }, [token, validateToken])

  if (isLoading) {
    return <div>Loading......</div>
  }

  return (
    <div>
      <h1>Rating</h1>
      <h1>Token: {token}</h1>
      <button type="button" onClick={handleUpdateTokenAsUsed}>
        Usar token
      </button>
    </div>
  )
}
