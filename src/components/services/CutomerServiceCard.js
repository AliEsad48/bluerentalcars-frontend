import React from "react"
import { Card, Row, Col } from "react-bootstrap"
const CustomerServiceCard = ({ title, description, icon }) => {
  return (
    <Card className="customer-service-card">
      <Card.Body>
        <Row>
          <Col md={2}>{icon}</Col>
          <Col md={10}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
export default CustomerServiceCard
