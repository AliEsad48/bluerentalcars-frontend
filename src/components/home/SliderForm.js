import React from "react"
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap"
import { FiCalendar, FiMapPin } from "react-icons/fi"
import { MdDateRange } from "react-icons/md"

const SliderForm = () => {
  return (
    <Form>
      <Form.Select size="lg" className="mb-3">
        <option>Select a car</option>
      </Form.Select>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiMapPin />
          &nbsp; Pick up
        </InputGroup.Text>
        <FormControl placeholder="Type a place" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiMapPin />
          &nbsp;Drop off
        </InputGroup.Text>
        <FormControl placeholder="Type a place" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiCalendar />
          &nbsp; Pick up
        </InputGroup.Text>
        <FormControl type="date" />
        <FormControl type="time" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiCalendar />
          &nbsp;Drop off
        </InputGroup.Text>
        <FormControl type="date" />
        <FormControl type="time" />
      </InputGroup>
      <Button size="lg" className="w-100" type="submit">
        CONTINUE RESERVATION
      </Button>
    </Form>
  )
}

export default SliderForm
