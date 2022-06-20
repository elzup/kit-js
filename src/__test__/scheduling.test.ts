import {
  easeScheduling,
  easeSchedulingTry,
  scheduling,
  schedulingBy,
  schedulingPick,
} from '../index'

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

  it('string range', () => {
    const [ids] = schedulingPick([
      { id: 101, start: '10-01', end: '10-10' },
      { id: 102, start: '10-05', end: '10-15' },
      { id: 103, start: '10-10', end: '10-20' },
    ])

    expect(ids).toStrictEqual([101, 103])
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

describe('easeSchedulingTry', () => {
  it('match size', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ]
    const ids = [['a', 'd'], ['b', 'e'], ['c']]

    expect(easeSchedulingTry(items, 3)).toStrictEqual(ids)
  })

  it('less size', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ]

    expect(easeSchedulingTry(items, 2)).toStrictEqual(false)
  })

  it('wide size', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ]
    const ids = [['a', 'e'], ['b'], ['c'], ['d']]

    expect(easeSchedulingTry(items, 4)).toStrictEqual(ids)
  })
})

describe('easeScheduling', () => {
  it('empty', () => {
    expect(easeScheduling([])).toStrictEqual([])
  })

  it('any size', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ]
    const ids = [['a', 'd'], ['b', 'e'], ['c']]

    expect(easeScheduling(items)).toStrictEqual(ids)
  })

  it('shuffle', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 2, end: 5 },
      { id: 'c', start: 3, end: 10 },
      { id: 'd', start: 4, end: 5 },
      { id: 'e', start: 5, end: 6 },
    ]

    expect(easeScheduling(items)).toStrictEqual([
      ['a'],
      ['b', 'e'],
      ['c'],
      ['d'],
    ])
  })
})
