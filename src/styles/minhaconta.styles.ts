import { styled } from './stitches.config'

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5rem',

  backgroundSize: 'cover',

  '@media (max-width: 768px)': {
    padding: '0 1rem',
  },
})

export const TopContainer = styled('form', {
  width: '35rem',
  height: 'auto',
  background: '#fff',
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, .50)',
  borderRadius: 20,
  padding: '2.5rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'center',
  gap: '2rem',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  button: {
    padding: '.5rem 1rem',
    borderRadius: 5,
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #11998e, #2dc466)',
    color: '#fff',
  },

  h1: {
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '1.8rem',
    },
  },
})

export const Column = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Input = styled('div', {
  width: '66%',
  display: 'flex',
  alignItems: 'center',

  background: '#d6d6d6',
  padding: '.5rem',
  borderRadius: 8,
  border: '2px solid #bdbdbd',

  input: {
    background: 'transparent',
    border: 0,
    width: '100%',
  },
})

export const ErrorMessage = styled('div', {
  // Estilos das mensagens de erro
  variants: {
    type: {
      error: {
        color: 'red',
      },
      success: {
        color: 'green',
      },
    },
  },
  defaultVariants: {
    type: 'error', // Define o tipo de mensagem como erro por padrão
  },
})

export const ContaHeader = styled('div', {
  width: '100vw',
  height: '5.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#bdd074',
})
