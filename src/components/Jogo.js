import { forca } from "../forca";

export default function Jogo({ iniciarJogo, mostrarPalavra, erro, corPalavra }) {

    return (
        <div className="jogo">

            <div className="forca" >
                <img src={forca[erro]} alt="Forca" data-test="game-image"
                />
            </div>

            <div className="lateral-jogo">

                <button className="botao-escolher-palavra" data-test="choose-word" onClick={iniciarJogo}>Escolher Palavra</button>

                <p className={corPalavra} data-test="word">{mostrarPalavra}</p>

            </div>

        </div>
    )
}