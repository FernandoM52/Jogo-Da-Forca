import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import listaLetras from "./listaLetras";
import palavras from "./palavras";
import { useState } from "react";

export default function App() {
  const [jogar, setJogar] = useState(false);
  const [palavra, setPalavra] = useState([]);
  const [botaoLetra, setBotaoLetra] = useState([]);
  const [letraTentada, setLetraTentada] = useState([]);
  //const [mostrarPalavra, setMostrarPalavra] = useState([]);
  const [erro, setErro] = useState(undefined);
  const [corPalavra, setCorPalavra] = useState("black");
  const [ganhou, setGanhou] = useState(false);

  function iniciarJogo() {
    setJogar(true);
    selecionarPalavra();
    setBotaoLetra([]);
    setLetraTentada([]);
    setErro(0);
    setCorPalavra("black");
    setGanhou(false);
  }

  function selecionarPalavra() {
    const embaralhar = Math.floor(Math.random() * palavras.length - 1);
    const palavaSelecionada = palavras[embaralhar].split('');
    setPalavra(palavaSelecionada);
    console.log(palavaSelecionada);
  }

  function verificaLetra(letra) {
    setBotaoLetra(...botaoLetra, letra);
    const letraClicada = [...letraTentada, letra];
    console.log(letraClicada);
    const verificaPalavra = [...palavra].every((l) => letraClicada.includes(l));

    if (palavra.includes(letra)) {
      setLetraTentada(letraClicada);
      console.log(letraClicada);
    } else {
      setErro(erro + 1);
    }
    if (erro === 5) {
      fimDeJogo(false);

    } else if (verificaPalavra) {
      fimDeJogo(true);
    }
  }

  function fimDeJogo(acertou) {
    setJogar(false);
    setLetraTentada(palavra);
    if (!acertou) {
      setCorPalavra("red");
    } else {
      setCorPalavra("green");
    }
  }


  return (
    <div className="app">
      <Jogo
        iniciarJogo={iniciarJogo}
        palavra={palavra}
        letraTentada={letraTentada}
        erro={erro}
        corPalavra={corPalavra}
        ganhou={ganhou}
      />
      <Letras
        jogar={jogar}
        botaoLetra={botaoLetra}
        verificaLetra={verificaLetra}
      />

    </div>
  );
}