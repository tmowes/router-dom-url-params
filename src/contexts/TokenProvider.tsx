import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { memoryUsedTokens } from '../memoryUsedTokens'

type TokenProviderProps = {
  children: ReactNode
}

export type TokenContextData = {
  isLoading: boolean
  tokens: FirebaseToken[]
  token: FirebaseToken | undefined
  updateTokenAsUsed: (urlToken: string | undefined) => Promise<void>
  validateToken: (urlToken: string | undefined) => void
}

type FirebaseToken = {
  id: string
  createdAt: string
  expiredIn: string
  used: boolean
}

export const TokenContext = createContext({} as TokenContextData)

export function TokenProvider(props: TokenProviderProps) {
  const { children } = props
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [tokens, setTokens] = useState<FirebaseToken[]>([])
  const [token, setToken] = useState<FirebaseToken | undefined>()

  const validateToken = useCallback(
    (urlToken: string | undefined) => {
      if (!urlToken) {
        navigate('/not-found')
        return
      }

      const usedTokens = tokens.filter((firebaseToken) => firebaseToken.used)
      const tokenExists = tokens.find((firebaseToken) => firebaseToken.id === urlToken)
      const tokenIsUsed =
        usedTokens.filter((firebaseToken) => firebaseToken.id === urlToken).length > 0

      if (tokenIsUsed || (!isLoading && !tokenExists)) {
        navigate('/not-found')
        return
      }

      setToken(tokenExists)
    },
    [isLoading, navigate, tokens],
  )

  const updateTokenAsUsed = useCallback(
    async (urlToken: string | undefined) => {
      if (!urlToken) return

      setTokens((prevTokens) =>
        prevTokens.map((firebaseToken) => {
          if (firebaseToken.id === urlToken) {
            return {
              ...firebaseToken,
              used: true,
            }
          }
          return firebaseToken
        }),
      )

      navigate('/thanks')
    },
    [navigate],
  )

  const getTokens = useCallback(async () => {
    setTokens([...memoryUsedTokens])
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getTokens()
  }, [getTokens])

  const providerValues = useMemo(
    () => ({
      isLoading,
      token,
      tokens,
      validateToken,
      updateTokenAsUsed,
    }),
    [isLoading, token, tokens, updateTokenAsUsed, validateToken],
  )

  return <TokenContext.Provider value={providerValues}>{children}</TokenContext.Provider>
}
