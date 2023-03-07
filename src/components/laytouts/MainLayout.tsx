import { getUser } from '@/features/auth/api/getUser'
import { User } from '@/features/auth/models/User'
import { useEffect, useRef, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

type MainLayoutProps = {
  children: React.ReactNode
}

/** メインレイアウト */
export const MainLayout = ({ children }: MainLayoutProps) => {
  /** ユーザー情報 */
  const [user, setUser] = useState<User>()
  /** ユーザー取得 */
  const _getUser = async () => {
    const response = await getUser()
    setUser(response.data.user)
  }
  /** React.StrictMode対処用ref */
  const didLogRef = useRef(false)
  // マウント時実行イベント
  useEffect(() => {
    //  一度のみ実行
    if (didLogRef.current === false) {
      didLogRef.current = true
      _getUser()
    }
  }, [])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            practice-vite-react-bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/top">
              Top
            </Nav.Link>
            <Nav.Link as={NavLink} to="/detail">
              Detail
            </Nav.Link>
          </Nav>
          <Navbar.Text className="justify-content-end">
            {user?.userName}
          </Navbar.Text>
        </Container>
      </Navbar>
      <main>{children}</main>
    </>
  )
}
