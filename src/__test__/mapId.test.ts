import { mapId } from '../mapId'

test('mapId', () => {
  expect(mapId([{ name: 'a' }, { name: 'b' }])).toMatchInlineSnapshot(`
    Array [
      Object {
        "id": 0,
        "name": "a",
      },
      Object {
        "id": 1,
        "name": "b",
      },
    ]
  `)
})
