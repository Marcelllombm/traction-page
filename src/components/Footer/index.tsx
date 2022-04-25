import { Container } from './styles';
import { FiLinkedin, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

export function Footer() {
  return (
    <Container>
        <nav>
            <ul>
            <li>PRODUTO</li>
            <li><a href='#home'>Sensor Tractian</a></li>
            <li><a href='#home'>Plataforma</a></li>
            <li><a href='#home'>Funcionalidades</a></li>
            <li><a href='#home'>Planos e preços</a></li>
            </ul>

            <ul>
            <li>MATERIAIS</li>
            <li><a href='#home'>Guias e Ebooks</a></li>
            <li><a href='#home'>Checklists</a></li>
            <li><a href='#home'>Intensivão</a></li>
            <li><a href='#home'>PCalculadora</a></li>
            </ul>   
            
            <ul>
            <li>SOBRE A TRACTIAN</li>
            <li><a href='#home'>Conheça a Tractian</a></li>
            <li><a href='#home'>Histórias de Sucesso</a></li>
            <li><a href='#home'>Imprensa</a></li>
            <li><a href='#home'>Trabalhe conosco</a></li>
            <li><a href='#home'>Política de Privacidade</a></li>
            </ul>   

            <ul>
            <li>FALE CONOSCO</li>
            <li><a href='#home'>Contato</a></li>
            <li><a href='#home'>Indique e Ganhe</a></li>
            <li><a href='#home'>Agende uma demonstração</a></li>
            <li><a href='#home'>© Tractian Tecnologia Ltda</a></li>
            <li><a href='#home'>CNPJ: 35.755.699/0001-84</a></li>
            </ul>  
        </nav>

        <div className='midia'>
        <h1>CONECTE-SE COM A TRACTIAN</h1> <br/>

          <div>
            <a href='https://www.linkedin.com/company/tractian/' target="_blank" rel="noreferrer"><FiLinkedin/></a>
            <a href='https://www.facebook.com/tractian/' target="_blank" rel="noreferrer"><FiFacebook/></a>
            <a href='https://www.instagram.com/tractian/' target="_blank" rel="noreferrer"><FiInstagram/></a>
            <a href='https://www.youtube.com/c/TRACTIAN/' target="_blank" rel="noreferrer"><FiYoutube/></a>
          </div>
        </div>
    </Container>
  )
}
