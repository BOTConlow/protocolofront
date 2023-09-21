import { FormEvent, useState } from 'react'
import axios from 'axios'
import * as z from 'zod'
import {
  CloseButton,
  ErrorMessage,
  Infos,
  Moldura,
  SaveButton,
  Title,
  UsuarioContainer,
  UsuarioContent,
} from './styles'

const leadDto = z.object({
  nome: z
    .string()
    .min(3, 'Por favor, digite seu nome completo.')
    .includes(' ', { message: 'Por favor, digite seu nome completo.' }),
  email: z.string().email('Por favor, digite um e-mail válido.'),
})

type leadDto = z.infer<typeof leadDto>

export default function CapturaLead() {
  const [leadForm, setLeadForm] = useState({} as leadDto)
  const [mensagemSucess, setMensagemSucess] = useState('')
  const [mensagemError, setMensagemError] = useState('')
  const [exibirFormulario, setExibirFormulario] = useState(true)

  const fecharFormulario = () => {
    setExibirFormulario(false)
  }

  const enviarRegistro = async (event: FormEvent) => {
    event.preventDefault()

    try {
      leadDto.parse(leadForm)

      const response = await axios.post(
        'https://websiteback.onrender.com/enviar-lead',
        {
          ...leadForm,
        },
      )

      console.log(response.data)
      setLeadForm({} as leadDto)
      setMensagemSucess('E-mail enviado com sucesso')
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        // error.errors é um array com detalhes sobre cada erro
        for (const detail of error.errors) {
          setMensagemError(detail.message)
        }
      } else {
        let errorMessage = 'Erro ao enviar o E-mail.'

        if (error.response) {
          if (error.response.status === 500) {
            errorMessage = 'Falha no servidor.'
          }
        }

        setMensagemError(errorMessage)
      }
      setTimeout(() => {
        setMensagemError('')
      }, 3000)
    }
  }

  return (
    <div>
      {exibirFormulario && (
        <UsuarioContainer onSubmit={enviarRegistro}>
          <Moldura />

          <UsuarioContent>
            <Title>
              <h1>Formulário de Desconto</h1>
              <p>
                Preencha o formulário e receba em seu e-mail um link com 35% de
                desconto!
              </p>
            </Title>

            <Infos>
              <label>Nome Completo:</label>
              <input
                type="text"
                value={leadForm.nome}
                onChange={(e) =>
                  setLeadForm((prevRegister) => ({
                    ...prevRegister,
                    nome: e.target.value,
                  }))
                }
              />
            </Infos>
            <Infos>
              <label>E-mail:</label>
              <input
                type="text"
                value={leadForm.email}
                onChange={(e) =>
                  setLeadForm((prevRegister) => ({
                    ...prevRegister,
                    email: e.target.value,
                  }))
                }
              />
            </Infos>

            <div>
              {mensagemSucess && (
                <ErrorMessage type={'success'}>{mensagemSucess}</ErrorMessage>
              )}
              {mensagemError && <ErrorMessage>{mensagemError}</ErrorMessage>}
            </div>
            <SaveButton type="submit">Enviar</SaveButton>
            <CloseButton onClick={fecharFormulario}>Fechar</CloseButton>
          </UsuarioContent>
        </UsuarioContainer>
      )}
    </div>
  )
}
