import '../calculator.css';

function Calculate({ input, result, history }) {
    return <div className="calculate-wrapper">
        <div className="history">
            <h4>{history}</h4>
        </div>
        <div className="result">
            <h2>{result}</h2>
        </div>
        <div className="input">
            <h3>{input}</h3>
        </div>
    </div>
}
export default Calculate