import { ButtonContainer } from './styles'

interface ButtonProps {
  title: string
}

export default function BuyButton({ title }: ButtonProps) {
  return (
    <>
      <ButtonContainer href="https://pay.slatpay.com/4QN9IS">
        <button>{title}</button>
      </ButtonContainer>
    </>
  )
}
