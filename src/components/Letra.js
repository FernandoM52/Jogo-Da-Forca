export default function Letra({ letra, jogar, botaoLetra, verificaLetra }) {
    const botaoHabilitado = jogar && !botaoLetra.includes(letra);
    return (
        <button data-test="letter" disabled={botaoHabilitado ? false : true} onClick={() => verificaLetra(letra)}>
            {letra}
        </button>
    );
}