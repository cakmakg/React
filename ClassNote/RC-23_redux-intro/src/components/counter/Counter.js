
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { arttir, azalt, sifirla } from "../../redux/actions/counterActions";

const Counter = () => {

// değişkenler useSelector hookuyla getirilir
const{yazi,sayac}=useSelector((state)=>state.counterReducer)

// fonksiyonları action aracılığıyla reducer dan getirme komutu
const dispatch1=useDispatch()


  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1>{sayac} </h1>
      {/* sayac */}
      <h2>{yazi} </h2>
      {/* yazi */}
      <div>
        <button
          className="counter-button positive"
          // arttır fonksiyonu
          onClick={() => dispatch1(arttir())}
        >
          ARTTIR
        </button>

        <button
          className="counter-button zero"
          //  sıfırla fonksiyonu
          onClick={() => dispatch1(sifirla())}
        >
          RESET
        </button>
        <button
          className="counter-button negative"
          // azaltıldı fonksiyonu
          onClick={() => dispatch1(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
}

export default Counter