import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

type MainLayoutProps = {
  children: React.ReactNode
}

/** メインレイアウト */
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            practice-vite-react-bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Top
            </Nav.Link>
            <Nav.Link as={NavLink} to="/detail">
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>{children}</main>
    </>
  )
}
