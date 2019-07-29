import { Card, Button } from 'react-bootstrap'
import React from 'react'
import './index.scss'


export const ImageCard = ({ photo }) => {
    console.log(photo)
    return (

       <Card bg="dark" text="white" className="card">
       <div className="imageBackground"style={{ backgroundImage: `url(${photo.links[0].href})`}}> </div>
            {/* <Card.Img variant="top" src={photo.links[0].href} className="img-card"/> */}
            <Card.Body>
            <Card.Title>{photo.data[0].title}</Card.Title>
            <Card.Text maxLength={140}>
               {photo.data[0].description}
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}