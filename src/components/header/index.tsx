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
import Logo from '../../../public/logo.png'
import Avatar from '../../../public/avatar.webp'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { User } from 'phosphor-react'

export default function Header() {
  const { user, signOut } = useContext(AuthContext)
  const [menu, setMenu] = useState(false)

  const abrirMenu = () => {
    setMenu(!menu)
  }

  const handleSignOut = () => {
    signOut()
    setMenu(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
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
          <button>HOME</button>
          <button>CHAT ONLINE</button>
          <button>DEPOIMENTOS</button>
          <button>BENEFÍCIOS</button>
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
