import '../calculator.css'

function Button({ symbol, className, handleClick }) {
    return <button className={className} onClick={() => handleClick(symbol)} > {symbol}</button >;
}
export default Button;