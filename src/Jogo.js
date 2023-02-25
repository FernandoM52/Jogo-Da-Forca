import forca0 from "./assets/forca0.png";

export default function Jogo() {
    return (
        <div className="jogo">
            <div div className="forca" >
                <img src={forca0} alt="Forca Vazia" />
            </div >
            <div className="lateral-jogo">
                <button className="botao-escolher-palavra">Escolher Palavra</button>
                <p className="palavra-do-jogo">quarentena</p>
            </div>
        </div >
    )
}