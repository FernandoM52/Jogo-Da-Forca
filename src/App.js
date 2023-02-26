import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import listaLetras from "./listaLetras";
import palavras from "./palavras";
import { useState } from "react";

export default function App() {
  const [jogar, setJogar] = useState(false);
  const [palavra, setPalavra] = useState([]);
  const [mostrarPalavra, setMostrarPalavra] = useState([]);
  const [erro, setErro] = useState(undefined);
  const [corPalavra, setCorPalavra] = useState("black");
  const [botaoLetra, setBotaoLetra] = useState([]);
  const [caractereCerto, setCaractereCerto] = useState("");

  function iniciarJogo() {
    setJogar(true);
    selecionarPalavra();
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

  function chutarLetra(l) {
    setBotaoLetra(...botaoLetra, l);
    console.log(botaoLetra)
    if (caractereCerto.includes(l)) {
      letraCorreta(l);
    } else {
      letraErrada(l);
    }
  }

  function letraCorreta(l) {

    const novaPalavraEscondida = [...mostrarPalavra];

    palavra.forEach((l, i) => {

      if (caractereCerto[i] === l) {
        novaPalavraEscondida[i] = l;
      }
    });

    setMostrarPalavra(novaPalavraEscondida);

  }

  function letraErrada(l) { }

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
        chutarLetra={chutarLetra}
      />

    </div>
  );
}