import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../common/SectionTitle"
import CustomerServiceCard from "./CutomerServiceCard"
import services from "../../data/services"

const CustomerServices = () => {
  return (
    <Container>
      <SectionTitle title="Customer Services" />

      <Row>
        {services.map((service) => (
          <Col md={6}>
            <CustomerServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CustomerServices
