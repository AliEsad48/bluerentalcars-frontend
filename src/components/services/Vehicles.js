import React, { useState } from "react"
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap"
import { FiCheck, FiChevronDown, FiChevronUp, FiX } from "react-icons/fi"
import SectionTitle from "../common/SectionTitle"
import { vehicleList } from "../../data/vehicleList"

const Vehicles = () => {
  const [vehicles, setVehicles] = useState(vehicleList)
  const [activeVehicle, setActiveVehicle] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const vehiclesLength = 5

  return (
    <Container>
      <SectionTitle title="Vehicles" />
      <Row>
        <Col lg={3}>
          <ul className="vehicleList">
            <li>
              <Button>
                <FiChevronUp />
              </Button>
            </li>
            {vehicles.map((vehicle, index) => {
              if (index >= 15) {
                return (
                  <li
                    key={vehicle.id}
                    className={index === activeVehicle ? "active" : ""}
                    onClick={() => setActiveVehicle(index)}
                  >
                    {vehicle.model}
                  </li>
                )
              }
              return null
            })}

            <li>
              <Button>
                <FiChevronDown />
              </Button>
            </li>
          </ul>
        </Col>
        <Col lg={6}>
          <Image
            src={`/assets/img/cars/${vehicles[activeVehicle].image}`}
            className="img-fluid"
          />
        </Col>
        <Col lg={3}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={2}>
                  <h3>${vehicles[activeVehicle].pricePerDay} per day</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Model</td>
                <td>{vehicles[activeVehicle].model}</td>
              </tr>
              <tr>
                <td>Doors</td>
                <td>{vehicles[activeVehicle].doors}</td>
              </tr>
              <tr>
                <td>Seats</td>
                <td>{vehicles[activeVehicle].seats}</td>
              </tr>
              <tr>
                <td>Luggage</td>
                <td>{vehicles[activeVehicle].luggage}</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td>{vehicles[activeVehicle].transmission}</td>
              </tr>
              <tr>
                <td>Air Conditioning</td>
                <td>
                  {vehicles[activeVehicle].airConditioning ? (
                    <FiCheck />
                  ) : (
                    <FiX />
                  )}
                </td>
              </tr>
              <tr>
                <td>Fuel Type</td>
                <td>{vehicles[activeVehicle].fuelType}</td>
              </tr>

              <tr>
                <td>Age</td>
                <td>{vehicles[activeVehicle].age}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Vehicles
