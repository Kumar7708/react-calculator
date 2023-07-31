import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [operationCount, setOperationCount] = useState(0);
  const [operator, setOperator] = useState("+");
  const [input, setInput] = useState([null, null]);
  const [result, setResult] = useState(0);

  const handleOnClickOperator = (oper) => {
    setOperator(oper);
    setOperationCount(operationCount + 1);
  };

  const handleOnChange = (e, index) => {
    let newInput = [...input];
    newInput[index] = Number(e.target.value);
    setInput(newInput);
  };

  const handleOnReset = () => {
    setInput([null, null]);
    setOperator("+");
  };

  useEffect(() => {
    if (input[0] !== null && input[2] !== null) {
      switch (operator) {
        case "+": {
          setResult(input[0] + input[1]);
          break;
        }
        case "-": {
          setResult(input[0] - input[1]);
          break;
        }
        case "*": {
          setResult(input[0] * input[1]);
          break;
        }
        case "/": {
          setResult(input[0] / input[1]);
          break;
        }
        default:
          break;
      }
    }
  }, [input, operator]);

  return (
    <form className="App">
      <div className="heading">
        <p>
          Total Operations : <span>{operationCount}</span>
        </p>
      </div>
      <div className="container">
        <input
          type="text"
          className="rect"
          placeholder="input1"
          onChange={(e) => handleOnChange(e, 0)}
        />
        <div className="circle noPointer">{operator}</div>
        <input
          type="text"
          className="rect"
          placeholder="input2"
          onChange={(e) => handleOnChange(e, 1)}
        />
      </div>
      <div className="container">
        <div className="circle" onClick={() => handleOnClickOperator("+")}>
          +
        </div>
        <div className="circle" onClick={() => handleOnClickOperator("-")}>
          -
        </div>
        <div className="circle" onClick={() => handleOnClickOperator("*")}>
          *
        </div>
        <div className="circle" onClick={() => handleOnClickOperator("/")}>
          /
        </div>
      </div>

      <div className="dist">
        <input
          type="Reset"
          value="Reset"
          className="resetButton"
          onClick={() => handleOnReset()}
        />
        <p className={input[0] !== null && input[1] !== null ? "" : "hide"}>
          result : <span>{result}</span>
        </p>
      </div>
    </form>
  );
}
