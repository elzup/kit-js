import { schedulingPick } from '../index'

describe('scheduling', () => {
  describe('schedulingPick', () => {
    it('single', () => {
      expect(
        schedulingPick([
          { id: 'a', start: 1, end: 10 },
          { id: 'b', start: 10, end: 20 },
          { id: 'c', start: 20, end: 30 },
        ])
      ).toMatchInlineSnapshot(`
        Array [
          Array [
            "a",
            "c",
          ],
          Array [
            Object {
              "end": 20,
              "id": "b",
              "start": 10,
            },
          ],
        ]
      `)
    })

    it('dup', () => {
      expect(
        schedulingPick([
          { id: 'a', start: 1, end: 10 },
          { id: 'b', start: 5, end: 15 },
          { id: 'c', start: 10, end: 20 },
        ])
      ).toMatchInlineSnapshot(`
        Array [
          Array [
            "a",
          ],
          Array [
            Object {
              "end": 15,
              "id": "b",
              "start": 5,
            },
            Object {
              "end": 20,
              "id": "c",
              "start": 10,
            },
          ],
        ]
      `)
    })

    it('complex', () => {
      expect(
        schedulingPick([
          { id: 'a', start: 1, end: 10 },
          { id: 'b', start: 5, end: 15 },
          { id: 'c', start: 10, end: 20 },
          { id: 'd', start: 12, end: 20 },
          { id: 'e', start: 16, end: 17 },
        ])
      ).toMatchInlineSnapshot(`
        Array [
          Array [
            "a",
            "d",
            "e",
          ],
          Array [
            Object {
              "end": 15,
              "id": "b",
              "start": 5,
            },
            Object {
              "end": 20,
              "id": "c",
              "start": 10,
            },
          ],
        ]
      `)
    })
  })
})
