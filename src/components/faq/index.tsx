import { ForwardedRef, forwardRef } from 'react'
import {
  AccordionItem,
  AccordionRoot,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from './styles'
import { AccordionContentProps } from '@radix-ui/react-accordion'

export default function Faq() {
  return (
    <AccordionRoot
      defaultChecked
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <StyledHeader>
          <StyledTrigger>
            EM QUANTO TEMPO TEREI RESULTADOS COM O PPP?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Aplicando tudo que você vai aprender diariamente e direitinho, você
            conseguirá ver resultados mínimos em até 10 dias, mas os resultados
            completos são a partir dos 25 dias de tratamento.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <StyledHeader>
          <StyledTrigger>
            VOU PRECISAR COMPRAR ALGO A MAIS PARA PARTICIPAR DO DESAFIO?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Não. Tudo que você vai precisar você já tem em casa ou no máximo na
            feira do seu bairro ou no supermercado que você faz suas compras.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <StyledHeader>
          <StyledTrigger>
            SERÁ QUE O CONTEÚDO NÃO É TÉCNICO DEMAIS?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Não. Dentro do desafio tudo é explicado de forma muito simples sem
            explicação complicada de médico.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <StyledHeader>
          <StyledTrigger>
            HÁ ALGUMA CONTRAINDICAÇÃO?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Não há contraindicações, é para qualquer pessoa, independentemente
            da idade, sexo ou se tem algum problema de saúde.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <StyledHeader>
          <StyledTrigger>
            TEM ALGUMA GARANTIA?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Sim! Você terá 17 dias de garantia incondicional após o recebimento
            do seu acesso. Caso você não se adapte, você poderá pedir o
            reembolso total.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <StyledHeader>
          <StyledTrigger>
            COMO RECEBEREI ACESSO AO PPP?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Após o pagamento, você receberá instantaneamente em seu e-mail as
            informações e dados de acesso a nossa Área de Membros na Kiwify,
            onde você encontrará todos os produtos disponíveis.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <StyledHeader>
          <StyledTrigger>
            QUAIS SÃO AS FORMAS DE PAGAMENTO?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            São 3 formas que você pode escolher: Cartão de crédito (parcelamos
            em até 12x), Boleto ou Pix. Pagando no Cartão de Crédito ou no Pix,
            o acesso ao Protocolo Zero Acne é liberado instantaneamente.
          </p>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  (
    { children, ...props }: AccordionContentProps,
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
)

AccordionContent.displayName = 'AccordionContent'
