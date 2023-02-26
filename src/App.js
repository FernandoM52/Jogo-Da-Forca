import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { listaLetras } from "./listaLetras";
import { palavras } from "./palavras";
import { useState } from "react";

export default function App() {
  const [jogar, setJogar] = useState(false);
  const [palavra, setPalavra] = useState([]);
  const [mostrarPalavra, setMostrarPalavra] = useState([]);
  const [corPalavra, setCorPalavra] = useState("black");
  const [botaoLetra, setBotaoLetra] = useState([]);
  const [erro, setErro] = useState(0);

  function iniciarJogo() {
    setJogar(true);
    selecionarPalavra();
    setBotaoLetra([]);
    setErro(0);
    setCorPalavra("black");
  }

  function selecionarPalavra() {
    const embaralhar = Math.floor(Math.random() * palavras.length - 1);
    const palavaSelecionada = palavras[embaralhar].split('');
    setPalavra(palavaSelecionada);

    const palavraEscondida = [];
    palavaSelecionada.forEach((listaLetras) => palavraEscondida.push("_ "));
    setMostrarPalavra(palavraEscondida);
  }

  return (
    <div className="app">
      <Jogo
        iniciarJogo={iniciarJogo}
        mostrarPalavra={mostrarPalavra}
        erro={erro}
        corPalavra={corPalavra}
      />
      <Letras
        jogar={jogar}
      />

    </div>
  );
}