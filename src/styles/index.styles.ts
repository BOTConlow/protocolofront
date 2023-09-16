import { styled } from './stitches.config'
import Back3 from '../../public/back3.jpg'
import Back4 from '../../public/back4.jpg'
import BgTop from '../../public/bgtop.png'
import BgProduct from '../../public/bgproduct.png'
import BallImg from '../../public/ball.png'
import BallImg2 from '../../public/ball2.png'
import { keyframes } from '@stitches/react'

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundSize: 'cover',
})

export const TopContainer = styled('div', {
  width: '100vw',
  height: '65rem',
  display: 'flex',
  position: 'relative',
  background: '#bdd074',

  '@media (max-width: 768px)': {
    height: '47rem',
  },
})

export const FirstImg = styled('div', {
  width: '30%',
  height: '100%',
  backgroundImage: `url(${Back3.src})`,
  backgroundPosition: '47% top',
  backgroundSize: 'cover',
  position: 'absolute',
  zIndex: 3,

  '&:before': {
    position: 'absolute',
    widows: '100%',
    height: '100%',
  },
})

export const ScndImg = styled('div', {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${BgTop.src})`,
  mixBlendMode: 'multiply',
  opacity: '0.15',
  backgroundSize: 'cover',
  zIndex: 2,
})

export const TopBox = styled('div', {
  width: '75rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2rem',
  gap: '3rem',
  padding: '3rem',
  color: 'white',
  background: '#ffffff35',
  backdropFilter: 'blur(15px)',
  borderRadius: 50,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 999,

  h4: {
    color: '#3f423c',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '.8rem',
    },
  },

  '@media (max-width: 768px)': {
    width: '100%',
    height: '37rem',
    padding: '0 1rem',
    marginTop: '2rem',
  },
})

export const Headline = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: '2rem',

  p: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    letterSpacing: '0.3rem',
    background: 'linear-gradient(90deg, #2e4a20, #508038)',
    padding: '.6rem 1.8rem',
    boxShadow: '7px 7px 10px #2e4a2070',
    borderRadius: '.2rem',

    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },

  h1: {
    fontSize: '2.2rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.50);',

    '@media (max-width: 768px)': {
      fontSize: '1.45rem',
    },
  },
})

export const BackgroundContainer = styled('div', {
  width: '100vw',
  position: 'relative',
  overflow: 'hidden',
  height: '25rem',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const BackgroundContent = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  zIndex: 1,

  variants: {
    background: {
      first: {
        backgroundImage: `url(${Back4.src})`,
      },
      scdn: {
        backgroundImage: `url(${Back3.src})`,
      },
    },
  },
})

export const ColoredContainer = styled('div', {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
  background: 'linear-gradient(150deg, #EBF2C2, #bdd074)',

  '@media (max-width: 768px)': {
    padding: '3rem 1rem',
  },
})

export const DepoimentosContent = styled('div', {
  width: 1120,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2.5rem 1.5rem',
  background: '#fffaf5',
  borderRadius: 20,
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, .50)',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const DepoimentosText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.8rem',
  textAlign: 'center',

  h3: {
    fontWeight: '500',
    fontSize: '1.1rem',
    letterSpacing: '0.3rem',
    color: '#292828',
  },

  h2: {
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.30);',
  },
})

export const DepoimentosImg = styled('div', {
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    padding: '1rem',
    transition: 'all 300ms ease',

    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
})

export const BeneficiosContainer = styled('div', {
  maxWidth: 1120,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4.5rem 0 2rem',

  h1: {
    fontSize: '1.8rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.20);',

    '@media (max-width: 768px)': {
      textAlign: 'center',
    },
  },

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '3rem 1rem',
  },
})

export const BeneficiosContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '680px',
  height: '680px',
  position: 'relative',
  margin: '5rem auto',
  backgroundImage: `url(${BgProduct.src})`,
  backgroundSize: 'cover',

  img: {
    zIndex: 999,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  '@media (max-width: 768px)': {
    width: '100%',
    height: '28rem',
    margin: '2rem auto',
    flexDirection: 'column',
    gap: '1rem',
  },
})

export const BallAnim = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '50%': {
    transform: 'rotate(180deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const Ball = styled('div', {
  width: '680px',
  height: '680px',
  position: 'absolute',
  top: '0rem',
  left: '0rem',
  backgroundSize: 'cover',

  '@media (max-width: 768px)': {
    width: '100%',
    height: '100%',
  },

  variants: {
    type: {
      first: {
        animation: `${BallAnim} 5s linear infinite`,
        backgroundImage: `url(${BallImg.src})`,
      },
      scnd: {
        animation: `${BallAnim} 5s linear infinite reverse`,
        backgroundImage: `url(${BallImg.src})`,
      },
      thrd: {
        animation: `${BallAnim} 8s linear infinite reverse`,
        backgroundImage: `url(${BallImg2.src})`,
      },
    },
  },
})

export const BeneficiosBox = styled('div', {
  maxWidth: '20rem',
  position: 'absolute',
  padding: '1.5rem',
  background: '#fff',
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, .25)',
  borderRadius: 2,
  zIndex: 900,

  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',

  '@media (max-width: 768px)': {
    position: 'static',
    padding: '1rem',
  },

  p: {
    fontSize: '0.75rem',
  },

  h4: {
    '@media (max-width: 768px)': {
      fontSize: '0.75rem',
    },
  },

  variants: {
    type: {
      first: {
        top: '0rem',
        left: '-15rem',
      },
      scnd: {
        bottom: '6.25rem',
        left: '-15rem',
      },
      thrd: {
        top: '3rem',
        right: '-15rem',
      },
      four: {
        bottom: '1.5rem',
        right: '-15rem',
      },
    },
  },
})

export const GarantiaContent = styled('div', {
  position: 'relative',
  width: '49rem',
  display: 'flex',
  alignItems: 'center',
  padding: '2.5rem',
  borderRadius: 10,
  background: '#fffaf5',
  boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, .30)',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  img: {
    position: 'absolute',
    top: '2rem',
    right: '-3.5rem',
    transition: '200ms ease',

    '@media (max-width: 768px)': {
      display: 'none',
    },

    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
})

export const GarantiaText = styled('div', {
  width: '35rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  h1: {
    fontSize: '1.8rem',
    textDecoration: 'underline',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.30);',

    '@media (max-width: 768px)': {
      FontSize: '3.4rem',
    },
  },
})

export const DermatoContainer = styled('div', {
  maxWidth: 1120,
  display: 'flex',
  gap: '3rem',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3rem',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    flexDirection: 'column',
    paddingTop: '0',
    padding: '2rem 1rem',
  },
})

export const DermatoText = styled('div', {
  width: '33rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.3rem',
  marginTop: '-2rem',

  '@media (max-width: 768px)': {
    width: '100%',
    marginTop: '0',
  },

  h1: {
    fontSize: '2.5rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.30);',

    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },

  p: {
    lineHeight: '140%',
  },
})

export const DermatoImg = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  backgroundImage: `url(${BgProduct.src})`,
  overflow: 'hidden',

  img: {
    zIndex: 999,
  },
})

export const FaqContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
  padding: '4rem 1rem',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    padding: '3rem 1rem',
  },

  h1: {
    fontSize: '2.5rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.30);',

    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
    },
  },
})

export const BonusContainer = styled('div', {
  maxWidth: 1120,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
  gap: '2rem',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '2rem 1rem',
  },

  h1: {
    marginBottom: '1.5rem',

    '@media (max-width: 768px)': {
      fontSize: '1.7rem',
    },
  },
})

export const BonusContent = styled('div', {
  display: 'flex',
  gap: '2rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

export const BonusBox = styled('div', {
  width: '31rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  border: '1px solid #ccc',
  padding: '1rem',
  borderRadius: 20,
  boxShadow: '10px 10px 10px 0px #ccc',
  transition: '300ms ease',

  '@media (max-width: 768px)': {
    width: '100%',
    flexDirection: 'column',
  },

  '&:hover': {
    transform: 'scale(1.03)',
  },
})

export const BonusText = styled('div', {
  h3: {
    marginBottom: '.5rem',
  },
})

export const VipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  h1: {
    color: '#ffff',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
})

export const VipContent = styled('div', {
  maxWidth: 1120,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem',
  gap: '3rem',
  borderRadius: 20,

  background: '#fff',
  boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, .30)',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    maxWidth: '23rem',
    gap: '2rem',
  },

  img: {
    '@media (max-width: 768px)': {
      width: '260px',
      height: '162px',
    },
  },
})

export const VipText = styled('div', {
  maxWidth: '30rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },

  h1: {
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.30);',
  },

  h2: {
    marginBottom: '.5rem',
  },
})
