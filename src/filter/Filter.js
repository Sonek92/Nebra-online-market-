import React, { useState } from 'react'
import { Form, Button  } from 'react-bootstrap'


function Filter(e) {

    const [filter , setFilter]= useState();

    const filterHandler = (names)=>{
        names = e.target.value 
      setFilter(names)
    }
  return (
    <div> <Form className="d-flex "style={{width: "30rem",
    height: "2.5rem",
    position: "",
    bottom: 0,
    right: 5,
    transform: "translate(60%, 10%)"}}>
<Form.Control
  type="text"
  placeholder="Search"
  className="me-2"
  aria-label="Search"
  value={filter}
  onChange = {filterHandler}
 
/>
<Button variant="outline-light" >Search</Button>
</Form></div>
  )
}

export default Filter;
