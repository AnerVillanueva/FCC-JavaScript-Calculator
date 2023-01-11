function App(){

  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if(expression[expression.length-1] == "="){
      if(/[1-9.]/.test(symbol)){
        setExpression(symbol);
      }else{
        setExpression(answer + symbol)
      }
    }
  };

  const calculate = () =>{
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=")
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prev) => 
      prev
      .split("")
      .slice(0, prev.length-1)
      .join(""));
    setAnswer(0);
  };

  return(
    <div className="calc">
    <div className="container">
      <div className="grid">
          <div id="display" className="dis">
            <input type="text" value={expression} placeholder="0" disabled/>
            <div className="total">{answer}</div>
          </div>
        <div className="padButton void transp"></div>
        <div id="clear" className="padButton AC red" onClick={allClear}>
          AC
        </div>
        <div className="padButton C red" onClick={clear}>
          C
        </div>
        <div id="divide" className="padButton div" onClick={() => display("/")}>
          /
        </div>
        <div id="multiply" className="padButton times" onClick={() => display("*")}>
          x
        </div>
        <div id="seven" className="padButton seven dark-gray" onClick={() => display("7")}>
          7
        </div>
        <div id="eight" className="padButton eight dark-gray" onClick={() => display("8")}>
          8
        </div>
        <div id="nine" className="padButton nine dark-gray" onClick={() => display("9")}>
          9
        </div>
        <div id="subtract" className="padButton minus" onClick={() => display("-")}>
          -
        </div>
        <div id="four" className="padButton four dark-gray" onClick={() => display("4")}>
          4
        </div>
        <div id="five" className="padButton five dark-gray" onClick={() => display("5")}>
          5
        </div>
        <div id="six" className="padButton six dark-gray" onClick={() => display("6")}>
          6
        </div>
        <div id="add" className="padButton plus" onClick={() => display("+")}>
          +
        </div>
        <div id="one"className="padButton one dark-gray" onClick={() => display("1")}>
          1
        </div>
        <div id="two" className="padButton two dark-gray" onClick={() => display("2")}>
          2
        </div>
        <div id="three" className="padButton three dark-gray" onClick={() => display("3")}>
          3
        </div>
        <div id="equals" className="padButton equal blue" onClick={calculate}>
          =
        </div>
        <div id="zero" className="padButton zero dark-gray" onClick={() => display("0")}>
          0
        </div>
        <div id="decimal" className="padButton dot dark-gray" onClick={() => display(".")}>
          .
        </div>
      </div>
    </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))