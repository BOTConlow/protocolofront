import Perfil1 from '../../../public/perfil1.webp'
import Perfil2 from '../../../public/perfil2.webp'
import Perfil3 from '../../../public/perfil3.webp'
import Perfil5 from '../../../public/perfil5.webp'
import Perfil6 from '../../../public/perfil6.webp'
import Perfil7 from '../../../public/perfil7.webp'
import Perfil9 from '../../../public/perfil9.webp'
import Perfil11 from '../../../public/perfil11.webp'
import Perfil12 from '../../../public/perfil12.webp'
import Perfil13 from '../../../public/perfil13.webp'
import Perfil14 from '../../../public/perfil14.webp'
import Perfil15 from '../../../public/perfil15.webp'
import Perfil16 from '../../../public/perfil16.webp'
import Perfil20 from '../../../public/perfil20.webp'
import Perfil21 from '../../../public/perfil21.webp'
import Perfil22 from '../../../public/perfil22.webp'
import Perfil23 from '../../../public/perfil23.webp'
import Perfil25 from '../../../public/perfil25.jpg'
import Perfil26 from '../../../public/perfil26.jpg'
import Perfil27 from '../../../public/perfil27.jpg'

interface LocationProps {
  city: string
  region: string
}

export const comentarios = (location: LocationProps) => [
  {
    src: Perfil2,
    name: 'Juliana Oliveira',
    desc: 'Eu já ia fechar a página, ainda bem que assisti até o final! Obrigada pelo protocolo Karina',
    time: '1 hora',
    ammount: 49,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil11,
        name: 'Camila Souza',
        desc: 'kkkkkkk eu também estava quase fechando, ufaa',
        time: '1 hora',
        ammount: 29,
      },
    ],
  },
  {
    src: Perfil6,
    name: 'Beatriz Alves',
    desc: `Alguém aí de ${
      location.region === 'undefined' ? 'Paraná' : location.region
    } que já testou pode me dizer se funciona?`,
    time: '2 horas',
    ammount: 67,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil14,
        name: 'Gabriel Souza',
        desc: `oii Beatriz, sim eu sou de ${
          location.city === 'undefined' ? 'Londrina' : location.city
        }. Tava desconfiado mas testei e funcionou sim!`,
        time: '1 hora',
        ammount: 49,
      },
      {
        src: Perfil6,
        name: 'Beatriz Alves',
        desc: 'Obgdaa!! Vou testar então',
        time: '1 hora',
        ammount: 32,
      },
    ],
  },
  {
    src: Perfil12,
    name: 'Marcelo Rodrigues',
    desc: 'Melhor escolha da minha vida, meu rosto ta bem diferente, to curtindo demais o resultado, já senti diferença na primeira semana, incrível!!',
    time: '3 horas',
    ammount: 65,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil16,
    name: 'Thaís Miranda',
    desc: 'Eu usei roacutan como última alternativa depois de 4 anos sofrendo com acne severa. remédio super pesado que amenizou as acnes mas me criou muitos problemas, ele tem muitos efeitos colaterais. Porém após minha gestação voltei a ter acne, mas em 4 semanas usando esse método voltei a ter o rosto limpo novamente. MUITO OBRIGADA DRA!',
    time: '5 horas',
    ammount: 84,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil21,
    name: 'Thiago Alves',
    desc: 'Recomendo, duas semanas de uso e já diminuiu uns 30%!!!',
    time: '7 horas',
    ammount: 76,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil20,
        name: 'Adriana Fernandes',
        desc: 'Sério???',
        time: '7 horas',
        ammount: 111,
      },
      {
        src: Perfil15,
        name: 'Roberto N.',
        desc: 'Funciona mesmo??',
        time: '6 horas',
        ammount: 56,
      },
      {
        src: Perfil21,
        name: 'Thiago Alves',
        desc: 'SIM!! podem confiar',
        time: '4 horas',
        ammount: 46,
      },
      {
        src: Perfil9,
        name: 'Marcos Guilherme',
        desc: 'mano vou usar então, não aguento mais sofrer com isso, todo dia amanheço com uma espinha nova na cara',
        time: '3 horas',
        ammount: 54,
      },
      {
        src: Perfil21,
        name: 'Thiago Alves',
        desc: 'confia man, diminuiu demais, e ainda to na segunda semana!👍',
        time: '1 hora',
        ammount: 32,
      },
    ],
  },
  {
    src: Perfil22,
    name: 'Júlia Azevedo',
    desc: 'Meninaaas que protocolo é esse, minha pele é completamente outra kkk. Só a gente sabe como isso afeta nossa autoestima',
    time: '8 horas',
    ammount: 126,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil13,
    name: 'Vanessa Nunes',
    desc: 'Eu sou de Manaus e funcionou muito bem nessa região úmida, tanto eu como minha cunhada tinhamos acne no rosto, nos ombros e nas costas, seguimos o passo a passo do protocolo e tivemos resultados bem rápido, e olha que antes disso eu e ela já tinhamos gastado muito dinheiro e nada funcionava!!',
    time: '10 horas',
    ammount: 62,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil23,
        name: 'Patrícia Carvalho',
        desc: 'Aqui em Brasília tb funcionou muito bem, apesar da secura da região. Estou a um mês usando o protocolo. Só gratidão',
        time: '4 horas',
        ammount: 23,
      },
      {
        src: Perfil25,
        name: 'Rafael Machado',
        desc: `Mesmo aqui em ${
          location.region === 'undefined' ? 'Maranhão' : location.region
        } o método funciona, faz 2 meses q comecei o protocolo e minha pele nunca foi tão limpa`,
        time: '8 horas',
        ammount: 72,
      },
    ],
  },
  {
    src: Perfil27,
    name: 'Luiz Martins',
    desc: 'Coitado de quem ainda não descobriu esse método kakakaka vai sofrer o resto da vida',
    time: '11 horas',
    ammount: 88,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil1,
    name: 'Luciana Oliveira',
    desc: 'Estou sofrendo com acne na fase adulta. Tenho 29 anos. e fui diagnosticada em 2022 com ovário policistico. De um tempo pra cá as espinhas estão sempre inflamadas, a minha pele não descansa mais. Ja tratei com antibióticos, sabonetes, anticoncepcionais e até "pilling" (concomitantemente). Continuei com espinhas, mas só com 23 dias aplicando esse protocolo já percebi uma melhora significativa',
    time: '13 horas',
    ammount: 102,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil5,
        name: 'Rafaela Gomes',
        desc: 'Meu maior arrependimento na vida inteira foi tomar o anticoncepcional precocemente, eu tinha 12 anos e por problemas tive que começar a tomar, eu não sabia dos problemas que poderiam me causar futuramente, e hoje vejo o quanto sofria com isso, não só com a acne, como também o inicio de trombose. Esse método foi revolucionário na minha vida. Sou grata a Karina',
        time: '6 horas',
        ammount: 46,
      },
    ],
  },
  {
    src: Perfil3,
    name: 'Sara Moscato',
    desc: 'De cara não ia testar esse protocolo, ainda bem que decidi dar essa chance, pois já tinha tentado de tudo e nada funcionava, achei que esse fosse mais um daqueles produtos que prometem ser milagrosos mas não funcionam',
    time: '13 horas',
    ammount: 154,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil7,
        name: 'Graciele Serra',
        desc: 'Mas funciona mesmo????',
        time: '9 horas',
        ammount: 64,
      },
      {
        src: Perfil3,
        name: 'Sara Moscato',
        desc: 'Sim, pode confiar! Já tive um bom resultado em poucas semanas.',
        time: '7 horas',
        ammount: 96,
      },
    ],
  },
  {
    src: Perfil26,
    name: 'Enzo Alves',
    desc: 'Sofrer com espinhas na adolescência é horrível, todos zoam você, mas ainda bem que conheci esse protocolo, 1 semana seguindo a risca minha pele ta mais limpa, não vejo a hora de ter minha autoestima de volta.',
    time: '15 horas',
    ammount: 61,
    hasRespostas: false,
    respostas: [],
  },
]
