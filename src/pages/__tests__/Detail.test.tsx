import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Detail } from '@/pages/Detail'

describe('Detail', () => {
  test('show header text', () => {
    render(<Detail />)
    expect(screen.getByText('detail page')).toBeInTheDocument()
  })
})
