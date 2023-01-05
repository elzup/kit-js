import { idfy, mapId } from '../index'

test('idfy', () => {
  expect(idfy([{ name: 'a' }, { name: 'b' }])).toMatchInlineSnapshot(`
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

test('mapId', () => {
  expect(mapId).toBeDefined()
})
