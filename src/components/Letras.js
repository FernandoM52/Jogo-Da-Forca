import Letra from "./Letra";
import listaLetras from "../listaLetras";
export default function Letras({ jogar, botaoLetra, verificaLetra }) {
    return (
        <ul className="letras">
            {listaLetras.map(l => (
                <li key={l}>
                    <Letra
                        letra={l}
                        jogar={jogar}
                        botaoLetra={botaoLetra}
                        verificaLetra={verificaLetra}
                    />
                </li>
            ))}
        </ul>
    );
}