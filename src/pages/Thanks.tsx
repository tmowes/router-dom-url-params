import { useNavigate } from 'react-router-dom'

export function Thanks() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Thanks</h1>
      <button
        type="button"
        onClick={() => {
          navigate('/avaliacao/seu-token-aqui')
        }}
      >
        Tentar usar token novamente
      </button>
    </div>
  )
}
