import { schedulingPick, scheduling } from '../index'

describe('schedulingPick', () => {
  it('single', () => {
    const [ids, after] = schedulingPick([
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 10, end: 20 },
      { id: 'c', start: 20, end: 30 },
    ])

    expect(ids).toStrictEqual(['a', 'b', 'c'])
    expect(after).toMatchInlineSnapshot(`Array []`)
  })
  it('dup', () => {
    const [ids, after] = schedulingPick([
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
    ])

    expect(ids).toStrictEqual(['a', 'c'])
    expect(after).toMatchInlineSnapshot(`
        Array [
          Object {
            "end": 15,
            "id": "b",
            "start": 5,
          },
        ]
      `)
  })

  it('complex', () => {
    const [ids, after] = schedulingPick([
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ])

    expect(ids).toStrictEqual(['a', 'c'])
    // expect(after).toMatchInlineSnapshot(`
    expect(after).toMatchInlineSnapshot(`
        Array [
          Object {
            "end": 15,
            "id": "b",
            "start": 5,
          },
          Object {
            "end": 20,
            "id": "d",
            "start": 12,
          },
          Object {
            "end": 17,
            "id": "e",
            "start": 16,
          },
        ]
      `)
  })
})

describe('scheduling', () => {
  it('single', () => {
    const ids = scheduling([
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 10, end: 20 },
      { id: 'c', start: 20, end: 30 },
    ])

    expect(ids).toStrictEqual([['a', 'b', 'c']])
  })
  it('dup', () => {
    const ids = scheduling([
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
    ])

    expect(ids).toStrictEqual([['a', 'c'], ['b']])
  })

  it('order', () => {
    const ids = scheduling([
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ])

    expect(ids).toStrictEqual([['a', 'c'], ['b', 'e'], ['d']])
    // expect(after).toMatchInlineSnapshot(`
  })
})
