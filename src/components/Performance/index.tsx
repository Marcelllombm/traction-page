import { Container } from './styles';
import sensor from '../../assets/sensoPlug.png'
import monitoramento from '../../assets/monitoramento.png'
import ativos from '../../assets/ativos.png'
export function Performace() {
  return (
    <Container>
        <div className='content'>
            <h1>MANTENHA A SUA EQUIPE E SEUS ATIVOS COM O MELHOR DESEMPELHO</h1>

            <div className='contentPerformace' >
              <div>
                  <h2>Sensor Plug & Play</h2>
                  <img src={sensor} alt='sensor'/>
                  <p>
                  <span>Tecnologia IoT avançada para conectar seus ativos</span><br/><br/>
                  Nossos sensores enviam dados do seu equipamento através de rede 3g/4g. Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina.
                  </p>
              </div>

              <div>
                  <h2> Monitoramento Online</h2>
                  <img src={monitoramento} alt='sensor'/>
                  <p>
                  <span>Plataforma que trabalha por você</span><br/><br/>
                  Insights automáticos, detecção de folgas mecânica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.
                  </p>
              </div>

              <div>
                  <h2>Gestão de Ativos</h2>
                  <img src={ativos} alt='sensor'/>
                  <p>
                  <span>O Software de manutenção dos seus sonhos</span><br/><br/>
                  Use procedimentos online para organizar checklists e inspeções. Centralize a rotina do seu time e potencialize as atividades de cada colaborador através das automações e métricas.
                  </p>
              </div>
            </div>

              <a href='#home'> Agende uma demonstração</a>
        </div>
    </Container>
  )
}
