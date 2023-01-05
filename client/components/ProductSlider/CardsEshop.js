import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardImg } from 'react-bootstrap'

const CardsEshop= props =>{
    let{imgSrc, name, price}= props.data;
  return (
   <Card className="p-0 overflow-hidden h-100 shadow">
    <div className='overflow-hiden rounded p-0 bg-light'>
        <CardImg variant="top" src={imgSrc}/>
    </div>
    <Card.Body className='text-center'>
        <Card.Title className='display-6'>{name}</Card.Title>
        <Card.Title>{price}</Card.Title>
    </Card.Body>
    {/* <Button className='w-100 rounded-0' variant="success">Add to Cart</Button> */}
   </Card>
  )
}

export default CardsEshop