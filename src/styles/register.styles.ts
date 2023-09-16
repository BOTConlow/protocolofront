import { styled } from '../styles/stitches.config'

export const MainContainer = styled('main', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundSize: 'cover',

  '@media (max-width: 768px)': {
    padding: '0 1rem',
    margin: '0',
  },
})

export const UsuarioContainer = styled('form', {
  width: '30rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '0.5rem',
  background: '#f9f9f9',
  boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  color: '#000',

  '@media (max-width: 768px)': {
    width: '100%',
    maxWidth: '30rem',
  },
})

export const UsuarioContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1rem',
  padding: '1.25rem',
})

export const Title = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
  marginBottom: '1rem',
  color: '#444',

  h1: {
    color: '#21ad6d',
    textShadow: '1px 1px 2px #1c915c',
  },

  button: {
    background: 'transparent',

    '&:hover': {
      color: 'red',
    },
  },
})

export const Infos = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',

  img: {
    borderRadius: 6,
  },

  input: {
    all: 'unset',
    padding: '10px',
    borderRadius: 4,
    boxShadow: '0px 0 0 1px #ccc',

    '&:focus': {
      boxShadow: '0px 0 0 1px #696969',
    },
  },

  label: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
})

export const SaveButton = styled('button', {
  display: 'block',
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#fff',
  background: 'linear-gradient(90deg, #11998e, #2dc466)',
  border: 'none',
  borderRadius: '4px',

  '&:disabled': {
    background: 'red',
    cursor: 'not-allowed',
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

export const Moldura = styled('div', {
  width: '100%',
  height: '1.5rem',
  background: 'linear-gradient(90deg, #11998e, #2dc466)',

  borderTopRightRadius: '0.5rem',
  borderTopLeftRadius: '0.5rem',
  borderBottomRightRadius: '100%',
  borderBottomLeftRadius: '100%',
})
