import './components/navBar.css'
import fotoLogo from './img/logoQualy.png'
import NavBar from './components/navBar'
import './mainPage.css'
import OpenChat from './components/openChat'


function MainPage() {
    
  
return (
    <>
        <NavBar/>


        <section className='a' >
            <OpenChat isOpen={true}/>
        </section>
    </>
    )
  }
  
  export default MainPage