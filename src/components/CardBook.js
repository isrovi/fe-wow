import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardBook({ data }) {
  return (
    <Card className="mb-3 shadow">
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.book}</Card.Title>
        <Card.Text>
          {data.author}
        </Card.Text>
        <Button variant="primary">Order</Button>
      </Card.Body>
    </Card>
  );
}