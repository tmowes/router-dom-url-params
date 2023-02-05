export const memoryUsedTokens = [
  {
    id: 'seu-token-aqui',
    createdAt: new Date().toString(),
    expiredIn: new Date(new Date().setDate(new Date().getDate() + 7)).toString(),
    used: false,
  },
  {
    id: 'seu-token-usado-aqui',
    createdAt: new Date().toString(),
    expiredIn: new Date(new Date().setDate(new Date().getDate() + 7)).toString(),
    used: true,
  },
]
