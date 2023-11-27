/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Montserrat } from 'next/font/google'
import Depoimento1 from '../../public/dep1.webp'
import Depoimento2 from '../../public/dep2.webp'
import Depoimento3 from '../../public/dep3.webp'
import Depoimento4 from '../../public/dep4.webp'
import Depoimento5 from '../../public/dep5.webp'
import Depoimento6 from '../../public/dep6.webp'
import Depoimento8 from '../../public/dep8.webp'
import Depoimento9 from '../../public/dep9.webp'
import Depoimento10 from '../../public/dep10.webp'
import Logo1 from '../../public/logo1.svg'
import Garantia from '../../public/garantia.webp'
import Dermato from '../../public/karina.webp'
import Iphone from '../../public/Iphone.webp'
import Bonus1 from '../../public/bonus1.webp'
import Bonus2 from '../../public/bonus2.webp'
import Bonus3 from '../../public/bonus3.webp'
import Bonus4 from '../../public/bonus4.webp'
import GrupoImg from '../../public/grupovip.webp'
import {
  BackgroundContainer,
  BackgroundContent,
  Ball,
  BeneficiosBox,
  BeneficiosContainer,
  BeneficiosContent,
  BeneficiosResponsive,
  BonusBox,
  BonusContainer,
  BonusContent,
  BonusText,
  ColoredContainer,
  DepoimentosContent,
  DepoimentosImg,
  DepoimentosText,
  DermatoContainer,
  DermatoImg,
  DermatoText,
  FaqContainer,
  FirstImg,
  GarantiaContent,
  GarantiaText,
  Headline,
  MainContainer,
  ScndImg,
  TopBox,
  TopContainer,
  VipContainer,
  VipContent,
  VipText,
} from '@/styles/index.styles'
import { Comentarios } from '@/components/Comentarios'
import Header from '@/components/header'
import { Vsl } from '@/components/vsl'
import Slider from 'react-slick'
import Image from 'next/image'
import Faq from '@/components/faq'
import { ChatsCircle, Star } from 'phosphor-react'
import BuyButton from '@/components/buyButton'
import CapturaLead from '@/components/capturaLead'
import { useEffect, useState } from 'react'

const Vietnam = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export default function Home() {
  const [timePage, setTimePage] = useState(false)
  const [timeLead, setTimeLead] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimePage(true)
    }, 5000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTimeLead(true)
    }, 1410000)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  const grupovip = [
    {
      icon: 'icone1',
      title: 'SUA AJUDA DIÁRIA',
      desc: 'Você não vai estar sozinho(a). Tire todas as dúvidas sobre o conteúdo que possam surgir durante a sua jornada e interaja com as outros participantes. #TodosJuntos',
    },
    {
      icon: 'icone2',
      title: 'INSPIRE OUTRAS PESSOAS',
      desc: 'Você pode postar seus resultados, pratos e como está se sentindo. Faça parte da nossa comunidade com mais de 8 mil pessoas com o mesmo objetivo que você: Alcançar a pele ideal dos nossos sonhos.',
    },
  ]

  const beneficios = [
    {
      title: 'Pele Livre Das Acnes',
      desc: 'Além de impressionante ação hidratante e revitalizadora, o PPP atua na desintoxicação do organismo das bactérias da acne diminuindo o aparecimento de espinhas e acnes.',
    },
    {
      title: 'Mais vitalidade e jovialidade para a pele',
      desc: 'As receitas do PPP contam com ingredientes ricos em vitamina D e o colágeno que promovem a reconstrução das celulas, retardando assim o envelhecimento da pele.',
    },
    {
      title: 'Pele bonita e hidratada',
      desc: 'Além de impressionante ação hidratante e revitalizadora, o PPP atua na desintoxicação do organismo das bactérias da acne.',
    },
    {
      title: 'Mais vitalidade e jovialidade para a pele',
      desc: 'Com a cuidadosa combinação dos ingredientes do PPP, manchas que ficam após as espinhas desaparecem em questão de semanas.',
    },
  ]

  const images = [
    {
      image: Depoimento1,
      alt: 'depoimento1',
    },
    {
      image: Depoimento2,
      alt: 'depoimento2',
    },
    {
      image: Depoimento3,
      alt: 'depoimento3',
    },
    {
      image: Depoimento4,
      alt: 'depoimento4',
    },
    {
      image: Depoimento5,
      alt: 'depoimento5',
    },
    {
      image: Depoimento6,
      alt: 'depoimento6',
    },
    {
      image: Depoimento8,
      alt: 'depoimento8',
    },
    {
      image: Depoimento9,
      alt: 'depoimento9',
    },
    {
      image: Depoimento10,
      alt: 'depoimento10',
    },
  ]

  return (
    <>
      <Head>
        <title>Protocolo Pele Perfeita </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <MainContainer className={Vietnam.className}>
        {timeLead && <CapturaLead />}
        <TopContainer id="homeSection">
          <FirstImg />
          <ScndImg />
          <Header />
          <TopBox>
            <Headline>
              <p>ASSISTA E DESCUBRA!</p>
              <h1>
                <span
                  style={{
                    color: '#383b35 ',
                  }}
                >
                  <u>O FIM DO ROACUTAN!</u>
                </span>{' '}
                Descubra a Revolução No Tratamento de Espinhas Com os Novos{' '}
                <span
                  style={{
                    color: '#383b35 ',
                  }}
                >
                  <u>PEPTÍDEOS ANTI-ACNE</u>!
                </span>
              </h1>
            </Headline>
            <Vsl />
            <h4>
              Assista este curto vídeo para descobrir como acabar com as
              espinhas em até 17 dias!
            </h4>
            {timePage && (
              <>
                <BuyButton title="CLIQUE AQUI PARA ACABAR COM AS ESPINHAS!" />
              </>
            )}
          </TopBox>
        </TopContainer>

        <Comentarios />
        <ColoredContainer id="depoimentosSection">
          <DepoimentosContent>
            <DepoimentosText>
              <h3>VEJA VOCÊ MESMO</h3>
              <h2>NÃO ACREDITE APENAS NAS NOSSAS PALAVRAS</h2>
            </DepoimentosText>
            <DepoimentosImg>
              <Slider {...settings}>
                {images.map((item) => (
                  <div key={item.alt}>
                    <Image alt={item.alt} src={item.image} quality={100} />
                  </div>
                ))}
              </Slider>
            </DepoimentosImg>
            {timePage && (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '1rem',
                }}
              >
                <BuyButton title="CLIQUE AQUI PARA SE LIVRAR DAS ESPINHAS!" />
              </div>
            )}
          </DepoimentosContent>
        </ColoredContainer>
        <BeneficiosContainer id="beneficiosSection">
          <h1>
            CONHEÇA SEUS{' '}
            <span style={{ color: '#bdd074' }}>BENEFÍCIOS A PELE</span>
          </h1>

          <BeneficiosResponsive>
            <Slider {...settings}>
              {beneficios.map((item) => (
                <BeneficiosBox key={item.desc}>
                  <Image alt="logo" src={Logo1} quality={100} />

                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </BeneficiosBox>
              ))}
            </Slider>
          </BeneficiosResponsive>

          <BeneficiosContent>
            <BeneficiosBox type={'first'}>
              <Image alt="logo" src={Logo1} quality={100} />

              <h4>Pele livre das acnes!</h4>
              <p>
                Além de impressionante ação hidratante e revitalizadora, o PPP
                atua na desintoxicação do organismo das bactérias da acne
                diminuindo o aparecimento de espinhas e acnes.
              </p>
            </BeneficiosBox>
            <BeneficiosBox type={'scnd'}>
              <Image alt="logo" src={Logo1} quality={100} />

              <h4>Pele bonita e hidratada</h4>
              <p>
                Além de impressionante ação hidratante e revitalizadora, o PPP
                atua na desintoxicação do organismo das bactérias da acne.
              </p>
            </BeneficiosBox>
            <BeneficiosBox type={'thrd'}>
              <Image alt="logo" src={Logo1} quality={100} />

              <h4>Mais vitalidade e jovialidade para a pele</h4>
              <p>
                As receitas do PPP contam com ingredientes ricos em vitamina D e
                o colágeno que promovem a reconstrução das celulas, retardando
                assim o envelhecimento da pele.
              </p>
            </BeneficiosBox>
            <BeneficiosBox type={'four'}>
              <Image alt="logo" src={Logo1} quality={100} />

              <h4>Diminui manchas pós acne </h4>
              <p>
                Com a cuidadosa combinação dos ingredientes do PPP, manchas que
                ficam após as espinhas desaparecem em questão de semanas.
              </p>
            </BeneficiosBox>
            <Ball type={'first'} />
            <Ball type={'scnd'} />
            <Ball type={'thrd'} />
            <Image alt="iphone" src={Iphone} quality={100} />
          </BeneficiosContent>
          {timePage && (
            <BuyButton title="CLIQUE AQUI PARA SE LIVRAR DAS ESPINHAS!" />
          )}
        </BeneficiosContainer>

        {timePage && (
          <>
            <BackgroundContainer>
              <BackgroundContent background={'first'} />
            </BackgroundContainer>
            <ColoredContainer>
              <GarantiaContent>
                <GarantiaText>
                  <h1>
                    <u>DESAFIO 17 DIAS</u>{' '}
                    <span style={{ color: '#bdd074' }}>COM O PPP</span>
                  </h1>
                  <p>
                    <b>Te desafiamos</b> a testar nosso protocolo por 17 dias, e
                    caso não tenha resultados visíveis nesse período, devolvemos{' '}
                    <b>100% do seu dinheiro</b> sem perguntas e sem burocracias!
                  </p>
                  <p>
                    Além disso, temos um <b>suporte 24 horas</b> para te ajudar
                    com qualquer problema que possa surgir!
                  </p>
                  <p>
                    <b>
                      VOCÊ TERA 17 DIAS APÓS A COMPRA PARA DEVOLUÇÃO, SEU RISCO
                      POR TENTAR É ZERO!
                    </b>
                  </p>
                  <BuyButton title="QUERO PARTICIPAR DO DESAFIO!" />
                </GarantiaText>
                <Image
                  alt="selo garantia"
                  src={Garantia}
                  quality={100}
                  width={215}
                  height={295}
                />
              </GarantiaContent>
            </ColoredContainer>
            <DermatoContainer>
              <DermatoText>
                <h1>
                  CONHEÇA SUA
                  <br /> DERMATOLOGISTA
                </h1>
                <h3>
                  <span style={{ color: '#bdd074' }}>Dra. KARINA COSTA</span>
                </h3>
                <p>
                  Dermatologista e Criadora do Protoclo Pele Perfeita, Membro da
                  Sociedade Brasileira de Dermatologia, com anos de experiência
                  e especializações em Longevidade Saudável, Fitoterapia e
                  peptídeos anti-acnes, a Doutora Karina Costa é considerada uma
                  das melhores do Brasil na luta contra as acnes.
                </p>
                <p>
                  "Eu desenvolvi o Protocolo Pele Perfeita com objetivo
                  principal de ajudar as pessoas. Confie na minha experiência e
                  especialização e experimente o Protocolo Pele Perfeita. Sua
                  pele merece o melhor, e essa é a solução definitiva para
                  isso."
                </p>
              </DermatoText>
              <DermatoImg>
                <Image
                  alt="karina costa"
                  src={Dermato}
                  quality={100}
                  width={386}
                  height={538}
                />

                <Ball type={'thrd'} />
              </DermatoImg>
            </DermatoContainer>
            <BackgroundContainer>
              <BackgroundContent background={'scdn'} />
            </BackgroundContainer>
            <BonusContainer>
              <h1>
                RECEBA NOSSOS 4 TOP VENDAS{' '}
                <span style={{ color: '#bdd074' }}>COMO BÔNUS!</span>
              </h1>
              <BonusContent>
                <BonusBox>
                  <Image alt="bonus" src={Bonus1} quality={100} />
                  <BonusText>
                    <h3>
                      <u>GUIA</u>{' '}
                      <span style={{ color: '#bdd074' }}>
                        <u>PELE SAUDÁVEL</u>
                      </span>
                    </h3>
                    <p>
                      Descubra os <b>pequenos ajustes</b> que devem ser feitos
                      no dia a dia para ter uma alimentação anti-acne{' '}
                      <b>sem precisar abrir mão</b> dos alimentos que você ama.
                    </p>
                  </BonusText>
                </BonusBox>
                <BonusBox>
                  <Image alt="bonus" src={Bonus3} quality={100} />
                  <BonusText>
                    <h3>
                      <u>DETOX</u>{' '}
                      <span style={{ color: '#bdd074' }}>
                        <u>ZERO ACNE</u>
                      </span>
                    </h3>
                    <p>
                      Transforme sua pele com os <b>poderes desintoxicantes</b>{' '}
                      dos nossos sucos detox. Com ingredientes naturais
                      perfeitos para <b>retirar as toxinas</b> causadoras da
                      acne no seu organismo.
                    </p>
                  </BonusText>
                </BonusBox>
              </BonusContent>
              <BonusContent>
                <BonusBox>
                  <Image alt="bonus" src={Bonus4} quality={100} />
                  <BonusText>
                    <h3>
                      <u>6 MÁSCARAS</u>{' '}
                      <span style={{ color: '#bdd074' }}>
                        <u>ANTI ACNE</u>
                      </span>
                    </h3>
                    <p>
                      Aprenda a <b>receita de 6 máscaras naturais</b> para
                      tratar da inflamação da sua pele rapidamente. Cada máscara{' '}
                      <b>só precisa de 2 ingredientes</b> que você tem em casa.
                    </p>
                  </BonusText>
                </BonusBox>
                <BonusBox>
                  <Image alt="bonus" src={Bonus2} quality={100} />
                  <BonusText>
                    <h3>
                      <u>GRUPO</u>{' '}
                      <span style={{ color: '#bdd074' }}>
                        <u>VIP</u>
                      </span>
                    </h3>
                    <p>
                      <b>Toda a ajuda e motivação</b> que você precisa para se
                      manter focado(a) no seu objetivo.
                    </p>
                  </BonusText>
                </BonusBox>
              </BonusContent>
              <BuyButton title="QUERO TER ACESSO A ESSE CONTEÚDO!" />
            </BonusContainer>
            <ColoredContainer>
              <VipContainer>
                <h1>INTERAÇÃO E MOTIVAÇÃO NO GRUPO VIP</h1>

                <VipContent>
                  <VipText>
                    {grupovip.map((item) => (
                      <div
                        key={item.title}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                          textAlign: 'center',
                          gap: '1.5rem',
                        }}
                      >
                        <div>
                          {item.icon === 'icone1' ? (
                            <Star size={90} weight="duotone" color="#bdd074" />
                          ) : item.icon === 'icone2' ? (
                            <ChatsCircle
                              size={90}
                              weight="duotone"
                              color="#bdd074"
                            />
                          ) : (
                            ''
                          )}
                        </div>
                        <div>
                          <h2>{item.title}</h2>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </VipText>
                  <Image
                    alt="bonus"
                    src={GrupoImg}
                    quality={100}
                    width={460}
                    height={289}
                  />
                </VipContent>
              </VipContainer>
            </ColoredContainer>
            <FaqContainer>
              <h1>
                PERGUNTAS <span style={{ color: '#bdd074' }}>FREQUENTES</span>
              </h1>
              <Faq />
            </FaqContainer>
          </>
        )}
      </MainContainer>
    </>
  )
}
