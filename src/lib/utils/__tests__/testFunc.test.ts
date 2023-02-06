import { testFunc } from '@/lib/utils/testFunc'

describe('testFunc', () => {
  test('true', () => {
    expect(testFunc(1, 2)).toBe(3)
  })
})
