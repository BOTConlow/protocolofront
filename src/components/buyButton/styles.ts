import { styled } from '../../styles/stitches.config'

export const ButtonContainer = styled('a', {
  button: {
    background: 'linear-gradient(90deg, #2F80ED, #56CCF2)',
    boxShadow: '8px 8px 20px #56CCF2',
    fontSize: '2rem',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.31)',
    color: '#fff',
    borderRadius: 10,
    border: 0,
    padding: '1rem 4rem',
    transition: 'all 300ms ease-in-out',

    '@media (max-width: 768px)': {
      fontSize: '.8rem',
      padding: '1rem 1rem',
    },

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})
