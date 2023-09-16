import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { CheckAuth } from '../contexts/check'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <AuthProvider>
      <CheckAuth>
        <Component {...pageProps} />
      </CheckAuth>
    </AuthProvider>
  )
}
