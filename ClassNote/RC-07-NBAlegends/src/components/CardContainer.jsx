import React, { useState } from "react";
import { data } from "../helpers/data";
import { Container,Form, Row,Col } from "react-bootstrap";

import PlayerCard from "./PlayerCard";

const CardContainer = () => {


    const[arama,setArama]=useState("")
    // console.log(arama);
    
    //!1.yöntem search islemi yaptirmak icin
    // let filtrelenmisData=data.filter((d)=>d.name.includes(arama));
    // console.log(object);

  return (
    <div>
    <Form.Control
          placeholder="Search Player.."
          className="w-50 m-auto"
          onChange={(e)=>setArama(e.target.value)}
          
        />
   <Container className="cardcontainer my-2">
     <Row xs={1} md={2} lg={4}>
       {/* {data da dönerken her bir elemanı <PlayerCard/> a gönder} */}
       {data.filter((d)=>d.name.toLowerCase()
       .includes(arama.toLowerCase())).map((player)=> (
       <Col className= "my-2" key={player.name}>
       <PlayerCard  {...player}/>
       </Col>
      

        ))}


      </Row>
   </Container>

      
    </div>
  );
};

export default CardContainer;
