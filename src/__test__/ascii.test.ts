import { asciify, controlCharLib, isAscii, trimNonAscii } from '../index'

test('isAscii', () => {
  expect(isAscii('a')).toBeTruthy()
  expect(isAscii('あ')).toBeFalsy()
  expect(isAscii('A \n)-.')).toBeFalsy()
})

test('isAscii num', () => {
  expect(isAscii(0x19)).toBeFalsy()
  expect(isAscii(0x20)).toBeTruthy()
  expect(isAscii(0x7e)).toBeTruthy()
  expect(isAscii(0x7f)).toBeFalsy()
  expect(isAscii(Infinity)).toBeFalsy()
})

test('trimNonAscii', () => {
  expect(trimNonAscii('a')).toBe('a')
  expect(trimNonAscii('a')).toBe('a')
  expect(trimNonAscii('いaあ b　')).toBe('a b')
  expect(asciify('いaあ b　')).toBe('a b')
})

test('controlCharLib', () => {
  expect(controlCharLib).toMatchInlineSnapshot(`
    Object {
      "0": Object {
        "char": "NUL",
        "dec": 0,
        "description": "null character",
        "hex": "0000",
      },
      "1": Object {
        "char": "SOH",
        "dec": 1,
        "description": "start of header",
        "hex": "0001",
      },
      "10": Object {
        "char": "LF",
        "dec": 10,
        "description": "line feed",
        "hex": "000A",
      },
      "11": Object {
        "char": "VT",
        "dec": 11,
        "description": "vertical tab",
        "hex": "000B",
      },
      "12": Object {
        "char": "FF",
        "dec": 12,
        "description": "form feed",
        "hex": "000C",
      },
      "127": Object {
        "char": "DEL",
        "dec": 127,
        "description": "delete (rubout)",
        "hex": "007F",
      },
      "13": Object {
        "char": "CR",
        "dec": 13,
        "description": "carriage return",
        "hex": "000D",
      },
      "14": Object {
        "char": "SO",
        "dec": 14,
        "description": "shift out",
        "hex": "000E",
      },
      "15": Object {
        "char": "SI",
        "dec": 15,
        "description": "shift in",
        "hex": "000F",
      },
      "16": Object {
        "char": "DLE",
        "dec": 16,
        "description": "data link escape",
        "hex": "0010",
      },
      "17": Object {
        "char": "DC1",
        "dec": 17,
        "description": "device control 1",
        "hex": "0011",
      },
      "18": Object {
        "char": "DC2",
        "dec": 18,
        "description": "device control 2",
        "hex": "0012",
      },
      "19": Object {
        "char": "DC3",
        "dec": 19,
        "description": "device control 3",
        "hex": "0013",
      },
      "2": Object {
        "char": "STX",
        "dec": 2,
        "description": "start of text",
        "hex": "0002",
      },
      "20": Object {
        "char": "DC4",
        "dec": 20,
        "description": "device control 4",
        "hex": "0014",
      },
      "21": Object {
        "char": "NAK",
        "dec": 21,
        "description": "negative acknowledge",
        "hex": "0015",
      },
      "22": Object {
        "char": "SYN",
        "dec": 22,
        "description": "synchronize",
        "hex": "0016",
      },
      "23": Object {
        "char": "ETB",
        "dec": 23,
        "description": "end transmission block",
        "hex": "0017",
      },
      "24": Object {
        "char": "CAN",
        "dec": 24,
        "description": "cancel",
        "hex": "0018",
      },
      "25": Object {
        "char": "EM",
        "dec": 25,
        "description": "end of medium",
        "hex": "0019",
      },
      "26": Object {
        "char": "SUB",
        "dec": 26,
        "description": "substitute",
        "hex": "001A",
      },
      "27": Object {
        "char": "ESC",
        "dec": 27,
        "description": "escape",
        "hex": "001B",
      },
      "28": Object {
        "char": "FS",
        "dec": 28,
        "description": "file separator",
        "hex": "001C",
      },
      "29": Object {
        "char": "GS",
        "dec": 29,
        "description": "group separator",
        "hex": "001D",
      },
      "3": Object {
        "char": "ETX",
        "dec": 3,
        "description": "end of text",
        "hex": "0003",
      },
      "30": Object {
        "char": "RS",
        "dec": 30,
        "description": "record separator",
        "hex": "001E",
      },
      "31": Object {
        "char": "US",
        "dec": 31,
        "description": "unit separator",
        "hex": "001F",
      },
      "4": Object {
        "char": "EOT",
        "dec": 4,
        "description": "end of transmission",
        "hex": "0004",
      },
      "5": Object {
        "char": "ENQ",
        "dec": 5,
        "description": "enquiry",
        "hex": "0005",
      },
      "6": Object {
        "char": "ACK",
        "dec": 6,
        "description": "acknowledge",
        "hex": "0006",
      },
      "7": Object {
        "char": "BEL",
        "dec": 7,
        "description": "bell (ring)",
        "hex": "0007",
      },
      "8": Object {
        "char": "BS",
        "dec": 8,
        "description": "backspace",
        "hex": "0008",
      },
      "9": Object {
        "char": "HT",
        "dec": 9,
        "description": "horizontal tab",
        "hex": "0009",
      },
    }
  `)
})
