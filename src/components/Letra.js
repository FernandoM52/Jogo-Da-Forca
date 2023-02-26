export default function Letra({ letra, jogar, botaoLetra, verificaLetra }) {
    return (
        <button data-test="letter" disabled={!jogar} onClick={() => verificaLetra(letra)}>
            {letra}
        </button>
    )
} 