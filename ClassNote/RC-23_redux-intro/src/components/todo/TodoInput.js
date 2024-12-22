import { useState } from "react";

import { useDispatch } from "react-redux";
import { ekle } from "../../redux/actions/todoActions";

const TodoInput = () => {
  //inputtan gelen veriyi taşıması için useState
const[inputVeri,setInput]=useState("")

const dispatch=useDispatch()


  // submit fonksiyonu reducers dan gelsin
const handleSubmit=(e)=>{
e.preventDefault()

// ekle fonksiyonu lazım,ekle fonksiyonuna inputVeri gönder
// ekle(inputVeri)
dispatch(ekle(inputVeri))

}


  return (
    <form onSubmit={handleSubmit}>
      <input className="todo-input" type="text" placeholder="Add Todo" 

onChange={(e)=>setInput(e.target.value)}

      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
