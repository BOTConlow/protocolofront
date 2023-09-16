import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

interface User {
  id: number
  nome: string
  email: string
  telefone: string
}

interface AuthContextData {
  user: User | null
  signIn: (email: string, senha: string) => Promise<void>
  signOut: () => void
  verifyToken: () => Promise<boolean>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const verifyToken = async () => {
    const token = localStorage.getItem('token')

    try {
      const response = await axios.get(
        `http://localhost:5000/info?token=${token}`,
      )

      const userData = response.data // Supondo que o backend retorna os dados do usuário autenticado

      console.log(userData)
      setUser(userData)
      return true
    } catch (error) {
      // Tratar erro de autenticação
      console.error('Erro ao fazer login:', error)
      return false
    }
  }

  const signIn = async (email: string, senha: string) => {
    try {
      const response = await axios.post('/enviar-login', {
        email,
        senha,
      })

      const userData = response.data // Supondo que o backend retorna os dados do usuário autenticado

      console.log(userData)
      localStorage.setItem('token', userData.token)
    } catch (error) {
      // Tratar erro de autenticação
      console.error('Erro ao fazer login:', error)
    }
  }

  const signOut = () => {
    localStorage.removeItem('token') // Remove o token do localStorage
    setUser(null) // Limpa o usuário no estado local
  }

  return (
    <AuthContext.Provider value={{ verifyToken, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
