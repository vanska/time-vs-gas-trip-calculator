import { distanceRegex, speedRegEx } from './regExes'

describe('Regex test for distance', () => {
  test(`0`, () => {
    expect(distanceRegex.test('0')).toBe(false)
  })
  test(`1`, () => {
    expect(distanceRegex.test('1')).toBe(true)
  })
  test(`A`, () => {
    expect(distanceRegex.test('A')).toBe(false)
  })
  test(`1234`, () => {
    expect(distanceRegex.test('1234')).toBe(true)
  })
  test(`12345`, () => {
    expect(distanceRegex.test('12345')).toBe(false)
  })
})

describe('Regex test for speed', () => {
  test(`0`, () => {
    expect(speedRegEx.test('0')).toBe(false)
  })
  test(`1`, () => {
    expect(speedRegEx.test('1')).toBe(true)
  })
  test(`A`, () => {
    expect(speedRegEx.test('A')).toBe(false)
  })
  test(`123`, () => {
    expect(speedRegEx.test('123')).toBe(true)
  })
  test(`1234`, () => {
    expect(speedRegEx.test('1234')).toBe(false)
  })
})
