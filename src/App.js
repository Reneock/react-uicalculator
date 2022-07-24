import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <div className="container main-page">
		<div className="row">
			<div className="col-md-12 first-row" style={{ fontFamily: "Arial Helvetica sansSerif"}}>
				<p style={{ backgroundColor: "darkgray", textAlign: "right", paddingRight: "50px", color: "white", height: "100px", paddingTop: "2rem", fontSize: "60px" }}>0</p>
				<div className="row sub-page" style={{textAlign: "center", height: "400px" }}>
					<div className="col-md-3" style={{border: "1px solid black"}}>AC</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>+/-</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>% </div>
					<div className="col-md-3" style={{backgroundColor: "orange", marginTop: "0"}}>÷</div>
					<hr/>
					<div className="col-md-3" style={{border: "1px solid black"}}>7</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>8</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>9</div>
					<div className="col-md-3" style={{backgroundColor: "orange"}}>x</div>
					<hr/>
					<div className="col-md-3" style={{border: "1px solid black"}}>4</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>5</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>6</div>
					<div className="col-md-3" style={{backgroundColor: "orange"}}>-</div>
					<hr/>
					<div className="col-md-3" style={{border: "1px solid black"}}>1</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>2</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>3</div>
					<div className="col-md-3" style={{backgroundColor: "orange"}}>+</div>
					<hr/>
					<div className="col-md-6" style={{border: "1px solid black"}}>0</div>
					<div className="col-md-3" style={{border: "1px solid black"}}>.</div>
					<div className="col-md-3" style={{backgroundColor: "orange"}}>=</div>

				</div>
			</div>
		</div>
		
	 </div>
  </div>
  );
}

export default App;
