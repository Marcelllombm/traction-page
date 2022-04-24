import { GloalStyle } from "./styles/Global";
import {Header} from './components/Header';
import { Performace } from "./components/Performance";
import { Security } from "./components/Security";
export function App() {
  return (
    <>
      <GloalStyle />
      <Header />
      <Performace />
      <Security />
      
    </>
  );
}

