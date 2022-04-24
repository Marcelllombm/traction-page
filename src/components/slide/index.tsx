import { Container } from "./styles";
import sensor from '../../assets/sensor.png'

export function Slide() {
  return (
    <Container>
        <div className="content">
            <div className="sensor">
                <h1>Monitoramento Online e Gestão  de Ativos em um só lugar</h1>
                <img src={sensor} alt="" />
            </div>
        </div>
        <div className="demonstration">
            <div className="demonsContent"> 
                <p>Evite falhas nas suas máquinas e torne o tempo de inatividade 
uma coisa do passado com sistema preditivo da TRACTIAN.</p>
                <a href="#home">Demonstração</a>
            </div>
        </div>
    </Container>
  )
}
