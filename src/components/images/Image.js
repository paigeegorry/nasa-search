import { Card, Button } from 'react-bootstrap'
import React from 'react'
import './css/index.scss'


export const ImageCard = ({ photo }) => {
    return (
       <Card bg="dark" text="white" className="card">
       <div className="imageBackground"style={{ backgroundImage: `url(${photo.links[0].href})`}}> </div>
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
