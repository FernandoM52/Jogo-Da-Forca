import Letra from "./Letra"
import { listaLetras } from "../listaLetras";

export default function Jogo({ jogar, botaoLetra, chutarLetra }) {


    return (
        <ul className="letras">
            {listaLetras.map(l => (
                <li key={l}>
                    <Letra
                        letra={l}
                        jogar={jogar}
                        chutarLetra={chutarLetra}
                    />
                </li>
            ))}
        </ul>
    )
}