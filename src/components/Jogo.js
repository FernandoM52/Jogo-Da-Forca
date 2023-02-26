import { forca } from "../forca";

export default function Jogo({ inicioJogo, iniciarJogo }) {
    const [forca0, forca1, forca2, forca3, forca4, forca5, forca6] = forca;

    return (
        <div className="jogo">

            <div className="forca" >

                <img src={forca0} alt="Forca" data-test="game-image"
                />

            </div>

            <div className="lateral-jogo">

                <button className="botao-escolher-palavra" data-test="choose-word" onClick={iniciarJogo}>Escolher Palavra</button>

                <p className="palavra-do-jogo">quarentena</p>

            </div>

        </div>
    )
}