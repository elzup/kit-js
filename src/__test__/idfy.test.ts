import { idfy, mapId } from '../obj/idfy'

test('idfy', () => {
  expect(idfy([{ name: 'a' }, { name: 'b' }])).toMatchInlineSnapshot(`
    [
      {
        "id": 0,
        "name": "a",
      },
      {
        "id": 1,
        "name": "b",
      },
    ]
  `)
})

test('mapId', () => {
  expect(mapId).toBeDefined()
})
