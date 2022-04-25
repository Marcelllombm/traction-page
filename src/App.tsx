import { GloalStyle } from "./styles/Global";
import {Header} from './components/Header';
import { Performace } from "./components/Performance";
import { Security } from "./components/Security";
import { Depositions } from "./components/Depositions";
import { Choice } from "./components/Choice";
import { Footer } from './components/Footer';
export function App() {
  return (
    <>
      <GloalStyle />
      <Header />
      <Performace />
      <Security />
      <Depositions />
      <Choice />
      <Footer />
    </>
  );
}

