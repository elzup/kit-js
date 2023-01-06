import {
  scheduling,
  schedulingBy,
  schedulingEase,
  schedulingEaseBy,
  schedulingEaseTry,
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
    expect(after).toStrictEqual([{ end: 15, id: 'b', start: 5 }])
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
    expect(after).toStrictEqual([
      { end: 15, id: 'b', start: 5 },
      { end: 20, id: 'd', start: 12 },
      { end: 17, id: 'e', start: 16 },
    ])
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

  it('order margin case', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ]
    const ids = scheduling(items.map((v) => ({ ...v, end: v.end + 1 })))

    expect(ids).toStrictEqual([['a', 'd'], ['b', 'e'], ['c']])
  })
})

describe('schedulingEaseTry', () => {
  it('match size', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ]
    const ids = [['a', 'd'], ['b', 'e'], ['c']]

    expect(schedulingEaseTry(items, 3)).toStrictEqual(ids)
  })

  it('less size', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 5, end: 15 },
      { id: 'c', start: 10, end: 20 },
      { id: 'd', start: 12, end: 20 },
      { id: 'e', start: 16, end: 17 },
    ]

    expect(schedulingEaseTry(items, 2)).toStrictEqual(false)
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

    expect(schedulingEaseTry(items, 4)).toStrictEqual(ids)
  })

  it('arg error', () => {
    expect(() => {
      schedulingEaseTry([], -1)
    }).toThrowErrorMatchingInlineSnapshot(`"n must be greater than 0"`)
  })
})

describe('schedulingEase', () => {
  it('empty', () => {
    expect(schedulingEase([])).toStrictEqual([])
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

    expect(schedulingEase(items)).toStrictEqual(ids)
  })

  it('shuffle', () => {
    const items = [
      { id: 'a', start: 1, end: 10 },
      { id: 'b', start: 2, end: 5 },
      { id: 'c', start: 3, end: 10 },
      { id: 'd', start: 4, end: 5 },
      { id: 'e', start: 5, end: 6 },
    ]

    expect(schedulingEase(items)).toStrictEqual([
      ['a'],
      ['b', 'e'],
      ['c'],
      ['d'],
    ])
  })
})

const yearSchedules = [
  { myid: 'id-a', begin: '2000', end: '2003' },
  { myid: 'id-b', begin: '2003', end: '2007' },
  { myid: 'id-c', begin: '2004', end: '2006' },
  { myid: 'id-d', begin: '2006', end: '2009' },
  { myid: 'id-e', begin: '2007', end: '2010' },
]
const yearToSchedule = (v: { myid: string; begin: string; end: string }) => ({
  id: v.myid.split('-')[1],
  start: Number(v.begin),
  end: Number(v.end),
})

describe('schedulingBy', () => {
  it('order', () => {
    const schedule = schedulingBy(yearSchedules, yearToSchedule)

    expect(schedule).toStrictEqual([
      [
        { begin: '2000', end: '2003', myid: 'id-a' },
        { begin: '2003', end: '2007', myid: 'id-b' },
        { begin: '2007', end: '2010', myid: 'id-e' },
      ],
      [
        { begin: '2004', end: '2006', myid: 'id-c' },
        { begin: '2006', end: '2009', myid: 'id-d' },
      ],
    ])
  })

  it('schedulingEaseBy', () => {
    const schedule = schedulingEaseBy(yearSchedules, yearToSchedule)

    expect(schedule).toStrictEqual([
      [
        { begin: '2000', end: '2003', myid: 'id-a' },
        { begin: '2004', end: '2006', myid: 'id-c' },
        { begin: '2006', end: '2009', myid: 'id-d' },
      ],
      [
        { begin: '2003', end: '2007', myid: 'id-b' },
        { begin: '2007', end: '2010', myid: 'id-e' },
      ],
    ])
  })
})
