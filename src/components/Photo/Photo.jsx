import {ContainerImg,MyName,MyProfesion,Redes ,Logo } from './photo.styles'
import FeatherIcon from 'feather-icons-react';

const Photo = () => {
  return(
    <ContainerImg>
        <MyName>Nicolas Rodriguez</MyName>
        <MyProfesion>Front End Developer</MyProfesion>
        <Redes>
          <Logo>
            <a href="https://www.linkedin.com/in/nicolas-rodriguez-fnx" target='_blank'>
              <FeatherIcon icon="linkedin" />
            </a>
            
          </Logo>
          <Logo>
            <a href="https://github.com/Nicofnx" target='_blank'> 
              <FeatherIcon icon="github" />
            </a>
          </Logo>
        </Redes>
      </ContainerImg>
  )
}

export default Photo