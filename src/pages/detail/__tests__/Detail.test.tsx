import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Detail } from '@/pages/detail'
import { MemoryRouter } from 'react-router-dom'

describe('Detail', () => {
  test('show header text', () => {
    render(<Detail />, { wrapper: MemoryRouter })
    expect(screen.getByText('detail page')).toBeInTheDocument()
  })
})
