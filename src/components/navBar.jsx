import './navBar.css'
import fotoLogo from '../img/logoQualy.png'


function NavBar() {
    
  
    return (
      <nav>
        <img src={fotoLogo}></img>
        <ul>
        <li className='home'>Home</li>
        <li><h1>A QualyCopy</h1></li>
        <li><h1>Areas de Atuação</h1></li>
        <li><h1>Serviços</h1></li>
        <li><h1>Cases</h1></li>
        <li><h1>Transformação Digital</h1></li>
        <li><h1>Blog</h1></li>
        <li><h1>Contato</h1></li>
        <li><h1>Área do Cliente</h1></li>
        </ul>

        <div className='atendimento'>
            <h1>ATENDIMENTO</h1>
        </div>
      </nav>
    )
  }
  
  export default NavBar
  