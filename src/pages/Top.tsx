import { Navbar, Container, Nav } from 'react-bootstrap'

/** トップページ */
export const Top = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">practice-vite-react-bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Top</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>top page</h1>
    </>
  )
}
