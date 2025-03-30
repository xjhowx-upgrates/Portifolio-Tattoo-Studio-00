import Logo from '../src/assets/img/header/logo.svg'
import GalleryImg1 from '../src/assets/img/gallery/1.png'
import GalleryImg2 from '../src/assets/img/gallery/2.png'
import GalleryImg3 from '../src/assets/img/gallery/3.png'
import GalleryImg4 from '../src/assets/img/gallery/4.png'
import GalleryImg5 from '../src/assets/img/gallery/5.png'
import GalleryImg6 from '../src/assets/img/gallery/6.png'
import GalleryImg7 from '../src/assets/img/gallery/7.png'
import GalleryImg8 from '../src/assets/img/gallery/8.png'
import QuoteImg from '../src/assets/img/testimonial/quote.svg'

// icons

import {
  FaPlay,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa'

export const headerData = {
  logo: Logo,
}

export const heroData = {
  title: 'JHOW TATTOOS'
  subtitle:
    'Aqui as tatuagens são uma forma única de expressão, que transmitem emoções e histórias que nunca se apagam. Venha deixar sua marca conosco.',
  btnText: 'Saiba mais',
}

export const aboutData = {
  title: 'SEJA BEM VINDO(A)'
  subtitle1:
    'Um estúdio de tatuagem apaixonado por transformar ideias em arte. Com um compromisso com a originalidade, buscamos sempre criar designs personalizados que conectem com a personalidade e histórias de nossos clientes.',
  subtitle2:
    'Nossa prioridade é a segurança e a higiene, oferecendo um ambiente acolhedor e seguro, para que você tenha a melhor experiência possível durante todo o processo.',
  href: '/about',
}

export const galleryData = {
  title: 'Confira nosso trabalho:',
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
}

export const interviewData = {
  title:
    '“Escolha a tatuagem que fala com você. Aqui, você está no controle da sua arte.”',
  btnText: 'Assistir Agora',
  btnIcon: <FaPlay />,
}

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      '“Eu estava em busca de algo realmente especial, e o Jhow Tattoos superou minhas expectativas. O design da minha tatuagem ficou perfeito, exatamente do jeito que imaginei. A experiência foi incrível e super profissional.”',
    name: 'Lucas',
    occupation: 'Fotógrafo',
  },
  {
    quoteImg: QuoteImg,
    message:
      '“Desde o primeiro contato até a finalização da minha tatuagem, fui muito bem atendida. A equipe é muito atenciosa e o ambiente é super acolhedor. Além disso, o resultado foi exatamente o que eu esperava, ou até melhor!”',
    name: 'Camila',
    occupation: 'Designer Gráfico',
  },
  {
    quoteImg: QuoteImg,
    message:
      '“O Jhow Tattoos me fez sentir à vontade desde o início. O tatuador foi muito atento ao que eu queria e a tatuagem ficou perfeita. Sem dúvida, é o meu estúdio de tatuagens de confiança!”',
    name: 'Thiago',
    occupation: 'Personal Trainer',
  },
  {
    quoteImg: QuoteImg,
    message:
      '“Sou cliente do Jhow Tattoos há anos e posso dizer que a qualidade e o talento dos tatuador sempre me impressinou. Não penso em procurar outro estúdio, pois sei que aqui sempre terei o melhor trabalho.”',
    name: 'Fernanda',
    occupation: 'Empreendedora',
  },
]

export const contactData = {
  title: 'Contato:',
  info: [
    {
      title: 'VENHA CONHECER!',
      subtitle:
        'Nosso estúdio em São Vicente/Sp é um espaço criativo, pensado para que você se sinta confortável enquanto transforma sua ideia em arte. Estamos prontos para criar tatuagens únicas para você.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Av. Presidente Getúlio Vargas - Morro dos Barbosas, São Vicente/SP ',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+55 13 7070-7070',
      },
      cel: {
        icon: <FaWhatsapp />,
        number: '+55 13 97070 7070',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contato@jhowtattoos.com.br',
      },
    },
  ],
  form: {
    name: 'Nome',
    email: 'Seu melhor email',
    message: 'Sua mensagem',
    btnText: 'Enviar',
  },
}

export const footerData = {
  about: {
    title: 'Nosso Studio Jhow Tattoos',
    subtitle:
      'A equipe da Jhow Tattoos está pronta para fazer com que sua próxima tatuagem seja uma experiência incrível e marcante. Aqui, a arte e a paixão se encontram.',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Morro dos Barbosas - Av. Presidente Getúlio Vargas',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+55 13 97070-7070',
    },
    cel: {
      icon: <FaWhatsapp />,
      number: '+55 13 97070 7070',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contato@jhowtattoos.com.br',
    },
  },
}
