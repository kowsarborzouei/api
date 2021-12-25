import React from 'react'
import { Card } from 'react-bootstrap'
const MonsterCard = ({ name = '', description = '', image = '' }) => {
    return (
        <Card >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default MonsterCard