import { Container } from "./styles";
import { Nav } from "../Nav";

export function Header() {
  return (
    <Container>
        <div>
            <img src={require(`../../assets/logotipo.svg`).default} alt="logo" />
            <Nav />
        </div>
    </Container>
  )
}
