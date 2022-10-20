import './App.css';
const Mensaje = () =>{
  return <div>
    hola function expression
    </div>

}
const Otro = "hola function expression"
let savedMoney = 1000000;
let debtMoney = 400000;
let totalMoney = savedMoney - debtMoney;

const App = () => {
  return (
    <div className="App">
     <Mensaje />
      El total de mi dinero actual es  ${totalMoney}
      
    </div>
  );
}

export default App;
