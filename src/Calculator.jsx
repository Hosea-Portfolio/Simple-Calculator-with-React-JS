import './calculator.css';
import Button from './components/button.jsx';
import Calculate from './components/calculate.jsx';
import { useState } from 'react';
import * as math from 'mathjs';

function Calculator() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')
    const [history, setHistory] = useState('')


    const addInput = (val) => {
        if (result === "") {
            if (val === "+" || val === "-" || val === "/" || val === "*") {
                setInput((input) => [...input, " " + val + " "])
            } else {
                setInput((input) => [...input, val + ""])
            }
        } else {
            if (val === "+" || val === "-" || val === "/" || val === "*") {
                setHistory(`${input.join("")} = ${result}`);
                setInput("");
                setResult("");
                setInput((input) => [...input, " " + val + " "])
            } else {
                setHistory(`${input.join("")} = ${result}`);
                setInput("");
                setResult("");
                setInput((input) => [...input, val + ""])
            }
        }

    }

    const reset = () => {
        setInput("");
        setResult("");
        setHistory("");
    }

    const deleteLastInput = () => {
        setInput((input) => input.slice(0, -1));
    }

    const calculateResult = () => {
        const x = input.join("")
        setResult(math.evaluate(x))
    }

    return (
        <>
            <div className="container">
                <h1>React Calculator</h1>
                <div className='calculator-container'>
                    <div className='row'>
                        <div className="calculate-container">
                            <Calculate input={input} result={result} history={history} />
                        </div>
                        <div className="operand-container">
                            <Button symbol="AC" className="button" handleClick={reset} />
                            <Button symbol="DEL" className="button" handleClick={deleteLastInput}/>
                            <Button symbol="%" className="button" handleClick={addInput} />
                            <Button symbol="/" className="button orange" handleClick={addInput} />
                            <Button symbol="7" className="button" handleClick={addInput} />
                            <Button symbol="8" className="button" handleClick={addInput} />
                            <Button symbol="9" className="button" handleClick={addInput} />
                            <Button symbol="*" className="button orange" handleClick={addInput} />
                            <Button symbol="4" className="button" handleClick={addInput} />
                            <Button symbol="5" className="button" handleClick={addInput} />
                            <Button symbol="6" className="button" handleClick={addInput} />
                            <Button symbol="-" className="button orange" handleClick={addInput} />
                            <Button symbol="1" className="button" handleClick={addInput} />
                            <Button symbol="2" className="button" handleClick={addInput} />
                            <Button symbol="3" className="button" handleClick={addInput} />
                            <Button symbol="+" className="button orange" handleClick={addInput} />
                            <Button symbol="0" className="button span-two" handleClick={addInput} />
                            <Button symbol="." className="button" handleClick={addInput} />
                            <Button symbol="=" className="button green" handleClick={calculateResult} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
