import { styled } from '../styles/stitches.config'

export const MainContainer = styled('main', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  flexWrap: 'nowrap',
  gap: '6rem',

  img: {
    '@media (max-width: 768px)': {
      width: '96%',
    },
  },

  '@media (max-width: 768px)': {
    height: 'auto',
    gap: '1rem',
    padding: '1rem 2rem',
    flexDirection: 'column',
  },
})

export const TextContent = styled('div', {
  width: '50%',

  p: {
    marginBottom: '1.2rem',
    fontWeight: '500',
    fontSize: '1.3rem',
  },

  h1: {
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.30);',

    fontSize: '2rem',
    color: '#bdd074',
    marginBottom: '2rem',
    textDecoration: 'underline',
    '@media (max-width: 768px)': {
      fontSize: '1.7rem',
    },
  },

  '@media (max-width: 768px)': {
    width: '100%',
  },
})
