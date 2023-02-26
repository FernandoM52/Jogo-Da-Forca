import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import { useState } from "react";

export default function App() {
  const [jogar, setJogar] = useState(false);
  const [botao, setBotao] = useState([])

  function iniciarJogo() {
    setJogar(true);
  }

  return (
    <div className="app">
      <Jogo
        jogar={jogar}
        iniciarJogo={iniciarJogo}
      />
      <Letras
        jogar={jogar}
      />

    </div>
  );
}