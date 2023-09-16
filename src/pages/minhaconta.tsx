import {
  Column,
  ContaHeader,
  ErrorMessage,
  Input,
  MainContainer,
  TopContainer,
} from '@/styles/minhaconta.styles'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, useEffect, useState, FormEvent } from 'react'
import axios from 'axios'
import * as z from 'zod'
import InputMask from 'react-input-mask'
import Image from 'next/image'
import Logo from '../../public/logo.png'

const Vietnam = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  return (
    <InputMask
      mask="(99) 99999-9999"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

const updatePasswordDTO = z.object({
  senhaAtual: z.string(),
  senha: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
})

type updatePasswordDTO = z.infer<typeof updatePasswordDTO>

const updateDTO = z.object({
  nome: z
    .string()
    .min(3, 'Por favor, digite seu nome completo.')
    .includes(' ', { message: 'Por favor, digite seu nome completo.' }),
  email: z.string().email('Por favor, digite um e-mail válido.'),
  telefone: z.string().min(15, 'Por favor, digite um telefone válido'),
})

type updateDTO = z.infer<typeof updateDTO>

export default function Conta() {
  const { user } = useContext(AuthContext)
  const [mensagemError, setMensagemError] = useState('')
  const [mensagemError2, setMensagemError2] = useState('')
  const [updateForm, setUpdateForm] = useState({} as updateDTO)
  const [updatePasswordForm, setUpdatePasswordForm] = useState(
    {} as updatePasswordDTO,
  )
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const handlePhoneChange = (value: string) => {
    setUpdateForm((prevRegister) => ({
      ...prevRegister,
      telefone: value,
    }))
  }

  useEffect(() => {
    if (user)
      setUpdateForm({
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
      })
  }, [user])

  const pinto = user?.id

  const handleUpdate = async (event: FormEvent) => {
    event.preventDefault()

    try {
      updateDTO.parse(updateForm)

      axios
        .post('http://localhost:5000/update-user', {
          ...updateForm,
          pinto,
        })

        .then((response) => {
          const token = response.data.token

          // Armazenar o token JWT no localStorage ou em um estado global (ex: Redux)
          localStorage.setItem('token', token)

          console.log(response.data)

          alert('Dados atualizados com sucesso!')

          console.log(user)
        })
    } catch (error) {
      if (error instanceof z.ZodError) {
        // error.errors é um array com detalhes sobre cada erro
        for (const detail of error.errors) {
          setMensagemError(detail.message)
        }
      }
      setTimeout(() => {
        setMensagemError('')
      }, 3000)
    }
  }

  const handlePasswordUpdate = async (event: FormEvent) => {
    event.preventDefault()

    try {
      updatePasswordDTO.parse(updatePasswordForm)

      if (updatePasswordForm.senha !== confirmarSenha) {
        setMensagemError2('As senhas não coincidem.')

        setTimeout(() => {
          setMensagemError2('')
        }, 3000)
        return
      }

      axios
        .post('http://localhost:5000/update-password', {
          ...updatePasswordForm,
          pinto,
        })

        .then((response) => {
          console.log(response.data)

          alert('Senha atualizada com sucesso!')

          console.log(user)
        })

        .catch((error) => {
          console.error(error)
          if (error.response && error.response.status === 500) {
            setMensagemError2('Falha no servidor.')
          } else if (error.response && error.response.status === 401) {
            setMensagemError2('Credenciais inválidas')
          } else {
            setMensagemError2('Erro ao realizar login')
          }
          setTimeout(() => {
            setMensagemError2('')
          }, 3000)
        })
    } catch (error) {
      if (error instanceof z.ZodError) {
        // error.errors é um array com detalhes sobre cada erro
        for (const detail of error.errors) {
          setMensagemError2(detail.message)
        }
      }

      setTimeout(() => {
        setMensagemError2('')
      }, 3000)
    }
  }

  return (
    <>
      <Head>
        <title>Minha Conta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <MainContainer className={Vietnam.className}>
        <ContaHeader>
          <a href="/">
            <Image
              src={Logo}
              alt="Logo"
              quality={100}
              priority={true}
              width={135}
              height={135}
            />
          </a>
        </ContaHeader>
        {user ? (
          <>
            <TopContainer onSubmit={handleUpdate}>
              <h1>MINHA CONTA</h1>
              <Column>
                <p>Seu nome</p>
                <Input>
                  <input
                    type="text"
                    value={updateForm.nome}
                    onChange={(e) =>
                      setUpdateForm((prevRegister) => ({
                        ...prevRegister,
                        nome: e.target.value,
                      }))
                    }
                    placeholder="Seu nome"
                  />
                </Input>
              </Column>
              <Column>
                <p>E-mail</p>
                <Input>
                  <input
                    type="text"
                    value={updateForm.email}
                    onChange={(e) =>
                      setUpdateForm((prevRegister) => ({
                        ...prevRegister,
                        email: e.target.value,
                      }))
                    }
                    placeholder="E-mail"
                  />
                </Input>
              </Column>
              <Column>
                <p>Telefone</p>
                <Input>
                  <PhoneInput
                    value={updateForm.telefone}
                    onChange={handlePhoneChange}
                  />
                </Input>
              </Column>
              <button>Atualizar Dados</button>
              {mensagemError && <ErrorMessage>{mensagemError}</ErrorMessage>}
            </TopContainer>

            <TopContainer onSubmit={handlePasswordUpdate}>
              <h1>ALTERAR SENHA</h1>
              <Column>
                <p>Senha Atual</p>
                <Input>
                  <input
                    type="password"
                    value={updatePasswordForm.senhaAtual}
                    onChange={(e) =>
                      setUpdatePasswordForm((prevRegister) => ({
                        ...prevRegister,
                        senhaAtual: e.target.value,
                      }))
                    }
                    placeholder="Senha Atual"
                  />
                </Input>
              </Column>
              <Column>
                <p>Nova Senha</p>
                <Input>
                  <input
                    type="password"
                    value={updatePasswordForm.senha}
                    onChange={(e) =>
                      setUpdatePasswordForm((prevRegister) => ({
                        ...prevRegister,
                        senha: e.target.value,
                      }))
                    }
                    placeholder="Nova Senha"
                  />
                </Input>
              </Column>
              <Column>
                <p>Confirmar Senha</p>
                <Input>
                  <input
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    placeholder="Confirme a Senha"
                  />
                </Input>
              </Column>
              <button>Alterar Senha</button>
              {mensagemError2 && <ErrorMessage>{mensagemError2}</ErrorMessage>}
            </TopContainer>
          </>
        ) : (
          <TopContainer>
            <h1>Você Precisa Estar Logado</h1>
            <button>
              <a href="/login">Login</a>
            </button>
          </TopContainer>
        )}
      </MainContainer>
    </>
  )
}
