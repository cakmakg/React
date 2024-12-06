import React,{useState} from "react";
import TodoEkle from "./../components/TodoEkle";
import TodoGoster from "./../components/TodoGoster";
import data from "../helper/Data";


const Home = () => {
  const [datam,setDatam]=useState(data)
  return (
    <div>
      <TodoEkle datam={datam} setDatam={setDatam}/>


       {/* 1-Todogostere datadan alınan bilgiyi gönderelim nba legenda olduğu gibi */}
      <TodoGoster datam={datam} setDatam={setDatam} />
      <h1>Todos</h1>

    </div>
  );
};

export default Home