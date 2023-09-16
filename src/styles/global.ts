import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&:focus': {
      outline: 'none',
    },
  },

  body: {
    color: '#575B52',
    background: '#fffaf5',
    overflowX: 'hidden',

    '-webkit-font-smoothing': 'antialiased',

    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(28, 28, 28, 0.332)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(180deg, #2e4a20, #508038)',
      borderRadius: 10,
    },
  },

  button: {
    cursor: 'pointer',
    border: 0,
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: '400',
  },
})
