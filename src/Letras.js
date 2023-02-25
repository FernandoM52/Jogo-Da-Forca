export default function Jogo() {
    const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="letras">
            {letras.map(l => (
                <button>{l}</button>
            ))}
        </div>
    )
}