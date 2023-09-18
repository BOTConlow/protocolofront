import { ButtonContainer } from './styles'

interface ButtonProps {
  title: string
}

export default function BuyButton({ title }: ButtonProps) {
  return (
    <>
      <ButtonContainer href="https://pay.kiwify.com.br/rcNH140">
        <button>{title}</button>
      </ButtonContainer>
    </>
  )
}
