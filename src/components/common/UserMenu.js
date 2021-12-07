import React from "react"
import { Link } from "react-router-dom"
import { useStore } from "../../store"
import { logout } from "../../store/user/userActions"
import { Button, DropdownButton, Dropdown } from "react-bootstrap"
import { FiUser } from "react-icons/fi"

const UserMenu = () => {
  const { userState, dispatchUser } = useStore()
  const { user, isUserLogin } = userState

  const handleLogout = () => {
    dispatchUser(logout())
    localStorage.removeItem("token")
  }

  return (
    <>
      {isUserLogin ? (
        <DropdownButton
          id="dropdown-basic-button"
          title={`${user.firstName} ${user.lastName}`}
          size="sm"
          align="end"
        >
          <Dropdown.Item as={Link} to="/reservations">
            Reservations
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/profile">
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      ) : (
        <Button as={Link} size="sm" to="/login">
          <FiUser /> Login
        </Button>
      )}
    </>
  )
}

export default UserMenu
