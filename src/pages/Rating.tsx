import { Navigate, useParams, useNavigate } from 'react-router-dom'

import { memoryUsedTokens } from '../memoryUsedTokens'

export function Rating() {
  const { token } = useParams()
  const navigate = useNavigate()

  if (typeof token !== 'string') {
    return <Navigate to="/not-found" />
  }

  // TODO: AQUI VALIDAR SE TOKEN JÁ FOI USADO
  if (memoryUsedTokens.includes(token)) {
    return <Navigate to="/not-found" />
  }

  return (
    <div>
      <h1>Rating</h1>
      <h1>Token: {token}</h1>
      <button
        type="button"
        onClick={() => {
          memoryUsedTokens.push(token)
          navigate('/thanks')
        }}
      >
        Usar token
      </button>
    </div>
  )
}
