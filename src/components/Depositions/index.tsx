import { Container }  from './styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fotoMascuulino from '../../assets/fotoMasculino.jpg';

export function Depositions() {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (


    <Container>
        <div className='content'>
            <h1>DEPOIMENTOS</h1>

        <Slider {...settings}>
            <div>
                <img src={fotoMascuulino} alt="homeml"/>
                <h3>Tiago João</h3>
                <h6>Supervisor de Manutenção Geral - AmstedMaxion</h6>
                <p>Antes da Tractian, a falha acontecia sem que nós tivéssemos nenhuma
 chance de reação. Agora nós conseguimos
 identificar qualquer anomalia fora do normal e isso nos 
permite fazer a intervenção antes que a quebra aconteça.</p>
            </div>

            <div>
                <img src={fotoMascuulino} alt="homeml"/>
                <h3>Tiago Lucas</h3>
                <h6>Supervisor de Manutenção Geral - AmstedMaxion</h6>
                <p>Antes da Tractian, a falha acontecia sem que nós tivéssemos nenhuma
 chance de reação. Agora nós conseguimos
 identificar qualquer anomalia fora do normal e isso nos 
permite fazer a intervenção antes que a quebra aconteça.</p>
            </div>

            <div>
                <img src={fotoMascuulino} alt="homeml"/>
                <h3>Tiago Pedro</h3>
                <h6>Supervisor de Manutenção Geral - AmstedMaxion</h6>
                <p>Antes da Tractian, a falha acontecia sem que nós tivéssemos nenhuma
 chance de reação. Agora nós conseguimos
 identificar qualquer anomalia fora do normal e isso nos 
permite fazer a intervenção antes que a quebra aconteça.</p>
            </div>

            <div>
                <img src={fotoMascuulino} alt="homeml"/>
                <h3>Tiago Mateus</h3>
                <h6>Supervisor de Manutenção Geral - AmstedMaxion</h6>
                <p>Antes da Tractian, a falha acontecia sem que nós tivéssemos nenhuma
 chance de reação. Agora nós conseguimos
 identificar qualquer anomalia fora do normal e isso nos 
permite fazer a intervenção antes que a quebra aconteça.</p>
            </div>

           
        </Slider>
      </div>
    </Container>
  )
}
