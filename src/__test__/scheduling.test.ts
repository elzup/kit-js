import { scheduling, schedulingBy, schedulingPick } from '../index'

describe('schedulingPick', () => {
  it('emp', () => {
    expect(schedulingPick([])).toStrictEqual([[], []])
  })

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
  it('emp', () => {
    expect(scheduling([])).toStrictEqual([])
  })

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
  })
})

describe('schedulingBy', () => {
  it('order', () => {
    const schedule = schedulingBy(
      [
        { myid: 'id-a', begin: '2000', end: '2022' },
        { myid: 'id-b', begin: '2005', end: '2015' },
        { myid: 'id-c', begin: '2010', end: '2020' },
        { myid: 'id-d', begin: '2012', end: '2020' },
        { myid: 'id-e', begin: '2016', end: '2017' },
      ],
      (v) => ({
        id: v.myid.split('-')[1],
        start: Number(v.begin),
        end: Number(v.end),
      })
    )

    expect(schedule).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "begin": "2000",
            "end": "2022",
            "myid": "id-a",
          },
        ],
        Array [
          Object {
            "begin": "2005",
            "end": "2015",
            "myid": "id-b",
          },
          Object {
            "begin": "2016",
            "end": "2017",
            "myid": "id-e",
          },
        ],
        Array [
          Object {
            "begin": "2010",
            "end": "2020",
            "myid": "id-c",
          },
        ],
        Array [
          Object {
            "begin": "2012",
            "end": "2020",
            "myid": "id-d",
          },
        ],
      ]
    `)
  })
})
