import MyServices from '../MyServices/MyServices'
import {Container, ContainerData, Tittle, InfoMe, MyDescription, ContainerSkills } from './PersonalData.styles'
import MyPortfolio from '../MyPortfolio/MyPortFolio'
import MyFormation from '../MyFormation/MyFormatio'
import MyForm from '../Contact/MyForm'

const PersonalData = () => {
  return (
    <Container>
    <ContainerData id='about'>
       <Tittle>Sobre Mi</Tittle>
       <InfoMe>Web Developer /  Luján, Bs As  /  Freelance</InfoMe>
       <MyDescription>
        Front end Developer apasionado por las tecnologías y en el aprendizaje de lo nuevo. Soy una persona aplicada y responsable, que comence el camino del programador de forma autodidacta y luego realice cursos para poder avalar mis conocimiento en las bases del desarrollo WEB donde aprendí HTML, CSS, JS y el framework que mas me gusta, React.
        Disfruto el trabajo en equipo, ya que soy empático y se que es la mejor manera de poder llevar a cabo cualquier objetivo. Ademas conozco y aplico metodologías ágiles, en especial SCRUM. <br/><br/>
          <p>Aquí detallo algunas tecnologías que aplique recientemente:</p> 
          <ContainerSkills>
            <ul>
              <li><h4>HTML5</h4></li>
              <li><h4>CSS3</h4></li>
              <li><h4>JS</h4></li>
              <li><h4>React</h4></li>
            </ul>
            <ul>
              <li><h4>Next Js</h4></li>
              <li><h4>Boostrap</h4></li>
              <li><h4>SASS</h4></li>
              <li><h4>Firebase</h4></li>
            </ul>
          </ContainerSkills>
       </MyDescription>
       <MyServices />
       <MyPortfolio />
       <MyFormation />
       <MyForm />
    </ContainerData>

    </Container>
  )
}

export default PersonalData