import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Top } from '@/pages/top'

describe('Top', () => {
  test('show header text', () => {
    render(<Top />)
    expect(screen.getByText('top page')).toBeInTheDocument()
  })
})
