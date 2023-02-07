import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TestComponent } from '@/components/TestComponent'

test('show hello', () => {
  render(<TestComponent />)
  expect(screen.getByText('hello')).toBeInTheDocument()
})
