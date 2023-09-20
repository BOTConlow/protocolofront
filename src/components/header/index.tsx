import Image from 'next/image'
import {
  Atalhos,
  HeaderContainer,
  HeaderContent,
  Login,
  Menu,
  MenuItem,
  Picture,
} from './styles'
import Logo from '../../../public/logo.webp'
import Avatar from '../../../public/avatar.webp'
import React, { useContext, useState, useEffect, useRef } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { User } from 'phosphor-react'

export default function Header() {
  const { user, signOut } = useContext(AuthContext)
  const [menu, setMenu] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  // Adicione um estado para controlar a classe de fundo colorido
  const [hasScrolled, setHasScrolled] = useState(false)

  const abrirMenu = () => {
    setMenu(!menu)
  }

  const handleSignOut = () => {
    signOut()
    setMenu(false)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef) return

      if (!headerRef.current) return

      const scrollY = window.scrollY
      const scrollThreshold =
        headerRef.current?.getBoundingClientRect().height + 850

      if (scrollY > scrollThreshold) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer ref={headerRef}>
      <HeaderContent variant={hasScrolled ? 'colored' : 'default'}>
        <a href="/">
          <Image
            src={Logo}
            alt="Logo"
            quality={100}
            priority={true}
            width={105}
            height={105}
          />
        </a>
        <Atalhos>
          <h4 onClick={() => scrollToSection('homeSection')}>HOME</h4>
          <h4 onClick={() => scrollToSection('chatSection')}>CHAT ONLINE</h4>
          <h4 onClick={() => scrollToSection('depoimentosSection')}>
            DEPOIMENTOS
          </h4>
          <h4 onClick={() => scrollToSection('beneficiosSection')}>
            BENEFÍCIOS
          </h4>
        </Atalhos>

        <Picture>
          {user ? (
            <Image
              onClick={abrirMenu}
              src={Avatar}
              alt="Logo"
              quality={100}
              priority={true}
              width={48}
              height={48}
            />
          ) : (
            <Login>
              <a href="/login">Login</a>
            </Login>
          )}
          {menu && (
            <Menu>
              <a href="/minhaconta">
                <MenuItem>
                  {' '}
                  <User size={32} />
                  Minha conta
                </MenuItem>
              </a>
              <button onClick={handleSignOut}>Sair</button>
            </Menu>
          )}
        </Picture>
      </HeaderContent>
    </HeaderContainer>
  )
}
