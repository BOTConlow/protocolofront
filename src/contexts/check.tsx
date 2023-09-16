import { useContext, useEffect } from 'react'
import { AuthContext } from './AuthContext'

export function CheckAuth({ children }: { children: React.ReactNode }) {
  const { verifyToken } = useContext(AuthContext)

  useEffect(() => {
    const isValid = verifyToken()

    if (!isValid) {
      window.location.href = '/'
    }
  }, [])

  return children
}
