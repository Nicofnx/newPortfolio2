import Card from '../Card/Card'
import {Container, Tittle, ContainerServices } from './myServices.styles'


const MyServices = () => {
  return(
    <Container id='service'>
      <Tittle>mis servicios</Tittle>
      <ContainerServices>
        <Card
          logo = {'monitor'}
          tittle = {'Front End'}
          description = {'Desarrollo de aplicaciones Web y mobiles. Construcciones de sitios acorde a lo solicitado por el cliente.'}
        />
        <Card
          logo = {'award'}
          tittle = {'Optimización de SEO'}
          description = {'Auditoria de tu sitio web para la búsqueda de una mejora en el posicionamiento de los motores de búsqueda.'}
        />
        <Card
          logo = {'key'}
          tittle = {'Data Base'}
          description = {'Instalación y configuración de certificado SSL en tu sitio. Redirección y configuraciones de tu sitio web o hosting.'}
        />
        <Card
          logo = {'eye'}
          tittle = {'Responsibe'}
          description = {'Diseño adaptable a distintos dispositivos para que tu web sea visible de manera optima en todo tipo de resolución.'}
        />
      </ContainerServices>
    </Container>
  )
}

export default MyServices