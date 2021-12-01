import React from "react"
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdDateRange } from "react-icons/md"

const SliderForm = () => {
  return (
    <Card style={{ alignItems: "center", marginTop: "5rem" }}>
      <Card.Body>
        <Form>
          <InputGroup>
            <Form.Select
              aria-label="Default select example"
              style={{
                width: "25rem",
              }}
            >
              <option>Select a car</option>
              <option value="1">Bir</option>
              <option value="2">İki</option>
              <option value="3">Üç</option>
            </Form.Select>
          </InputGroup>
          <InputGroup
            style={{
              width: "25rem",
              marginTop: "1rem",
            }}
          >
            <InputGroup.Text
              style={{ height: "1.5rem", textAlign: "center", width: "6.2rem" }}
            >
              <HiOutlineLocationMarker />
              Pick Up
            </InputGroup.Text>
            <FormControl
              style={{ height: "1.5rem" }}
              placeholder="Type a place"
            />
          </InputGroup>
          <InputGroup
            style={{
              width: "25rem",
              marginTop: "1rem",
            }}
          >
            <InputGroup.Text
              style={{ height: "1.5rem", textAlign: "center", width: "6.2rem" }}
            >
              <HiOutlineLocationMarker />
              Drop Off
            </InputGroup.Text>
            <FormControl
              style={{ height: "1.5rem" }}
              placeholder="Type a place"
            />
          </InputGroup>
          <InputGroup
            style={{
              width: "25rem",
              marginTop: "1rem",
            }}
          >
            <InputGroup.Text
              style={{
                height: "1.5rem",
                textAlign: "center",
                width: "6.2rem",
              }}
            >
              <MdDateRange />
              Pick Up
            </InputGroup.Text>
            <FormControl
              type="date"
              style={{
                height: "1.5rem",
              }}
            />
            <FormControl
              type="time"
              style={{
                height: "1.5rem",
              }}
            />
          </InputGroup>
          <InputGroup
            style={{
              width: "25rem",
              marginTop: "1rem",
            }}
          >
            <InputGroup.Text
              style={{
                height: "1.5rem",
                textAlign: "center",
                width: "6.2rem",
              }}
            >
              <MdDateRange />
              Drop Off
            </InputGroup.Text>
            <FormControl
              type="date"
              style={{
                height: "1.5rem",
              }}
            />
            <FormControl
              type="time"
              style={{
                height: "1.5rem",
              }}
            />
          </InputGroup>
        </Form>
        <Button style={{ width: "25rem", height: "3rem", marginTop: "1rem" }}>
          CONTINUE RESERVATION
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SliderForm
