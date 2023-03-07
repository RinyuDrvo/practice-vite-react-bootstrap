import { server } from '@/test/server'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainLayout } from '@/components/laytouts/MainLayout'
import { User } from '@/features/auth/models/User'
import { rest } from 'msw'

const mockChildComponent = () => {
  return (
    <>
      <h1 data-testid="mockChildDom">child dom</h1>
    </>
  )
}

describe('components layouts MainLayout', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('ユーザー名表示', async () => {
    const mockUser: User = {
      userId: '11111111',
      userName: '鈴木 二郎',
      email: 'hoge@fuga.com',
    }
    server.use(
      rest.get('/user', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ user: mockUser }))
      })
    )

    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <MainLayout>{mockChildComponent()}</MainLayout>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText(mockUser.userName)).toBeInTheDocument()
    })
  })
})
