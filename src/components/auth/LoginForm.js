import React from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
const LoginForm = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default LoginForm
