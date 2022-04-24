import { Container } from './styles';
import boneco from '../../assets/boneco.png';

export function Choice() {
  return (
    <Container>
        <div className='content'>
            <h1>POR QUE ESCOLHER A TRACTIAN?</h1>

            <div className='contentFlex'>

                <img src={boneco} alt="boneco dando ok!!!"/>
              

              <div>
                <p><strong>Manutenção Preditiva</strong> Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.</p>
                <p><strong>Monitoramento Online </strong>Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real.</p>
                <p><strong>Setup Instantâneo</strong> Solução Plug & Play, sem necessidade de WiFi industrial, comunicação via 3G/4G independente.</p>
                <p><strong>CMMS Integrado </strong>Automatize processos, ordens de serviço e tenha total controle sobre seus ativos e equipe.</p>
              </div>
              
            </div>
        </div>
    </Container>
  )
}
