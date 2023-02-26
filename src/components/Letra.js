export default function Letra({ letra, jogar, chutarLetra }) {
    return (
        <button data-test="letter" disabled={!jogar} onClick={() => chutarLetra(letra)}>
            {letra}
        </button>
    )
} 