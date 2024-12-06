import React from 'react'
import {Form,Button} from "react-bootstrap";

const todoGoster = ({datam,setDatam}) => {
  const deleteTodo=(id)=>{
    setDatam(datam.filter((d)=>d.id !== id))

  }

  return (
    <div>

        <Form.Control
          placeholder="Enter new todo"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=>console.log(e.target.value)}
        />
        <Button>Add Test</Button>



       {/* 2- gönderilen data alınıp map ile ekranda gösterilir */}

{/* 7-Delete butona basıldığnda  
data id deleteTodoya gönder*/}
    </div>

   
  )
}

export default todoGoster