import { Container } from "./styles";
import { Nav } from "../Nav";
import { Slide } from "../slide";

export function Header() {
  return (
    <Container>
        <div>
            <img src={require(`../../assets/logotipo.svg`).default} alt="logo" />
            <Nav />
            <Slide/>
        </div>
    </Container>
  )
}
