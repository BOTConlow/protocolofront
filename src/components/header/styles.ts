import { styled } from '../../styles/stitches.config'

export const HeaderContainer = styled('header', {
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const HeaderContent = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backdropFilter: 'blur(8px)',
  boxShadow: '1px 0px 15px 5px #00000035',
  zIndex: 1000,

  variants: {
    variant: {
      colored: {
        background: '#bdd074', // Substitua por sua cor desejada
      },
      default: {
        background: 'transparent', // Substitua por sua cor desejada
      },
    },
  },
})

export const Atalhos = styled('div', {
  display: 'flex',
  gap: '3rem',
  color: '#fff',

  button: {
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 500,
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.20)',
    background: 'transparent',
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const Picture = styled('div', {
  position: 'relative',
  img: {
    borderRadius: '100%',
    cursor: 'pointer',
  },
})

export const Menu = styled('div', {
  width: '12rem',
  height: 'auto',
  position: 'absolute',
  top: '5rem',
  right: '-3rem',

  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  background: '#fff',
  padding: '1rem',
  borderRadius: 10,

  a: {
    color: '#000',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  button: {
    width: '100%',
    padding: '.5rem',
    borderRadius: 20,
    fontSize: '1rem',
    background: 'transparent',
    border: '1px solid #508038',
    transition: '100ms linear',

    '&:hover': {
      color: '#fff',
      background: 'linear-gradient(90deg, #2e4a20, #508038)',
    },
  },
})

export const MenuItem = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.8rem',
})

export const Login = styled('div', {
  a: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    border: '1.5px solid #508038',
    borderRadius: 20,
    padding: '.5rem 1.5rem',
    transition: '100ms linear',

    '&:hover': {
      background: 'linear-gradient(90deg, #2e4a20, #508038)',
    },
  },
})
