import { asciify, controlCharLib, isAscii, trimNonAscii } from '../char/ascii'

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
    {
      "0": {
        "char": "NUL",
        "dec": 0,
        "description": "null character",
        "hex": "0000",
      },
      "1": {
        "char": "SOH",
        "dec": 1,
        "description": "start of header",
        "hex": "0001",
      },
      "10": {
        "char": "LF",
        "dec": 10,
        "description": "line feed",
        "hex": "000A",
      },
      "11": {
        "char": "VT",
        "dec": 11,
        "description": "vertical tab",
        "hex": "000B",
      },
      "12": {
        "char": "FF",
        "dec": 12,
        "description": "form feed",
        "hex": "000C",
      },
      "127": {
        "char": "DEL",
        "dec": 127,
        "description": "delete (rubout)",
        "hex": "007F",
      },
      "13": {
        "char": "CR",
        "dec": 13,
        "description": "carriage return",
        "hex": "000D",
      },
      "14": {
        "char": "SO",
        "dec": 14,
        "description": "shift out",
        "hex": "000E",
      },
      "15": {
        "char": "SI",
        "dec": 15,
        "description": "shift in",
        "hex": "000F",
      },
      "16": {
        "char": "DLE",
        "dec": 16,
        "description": "data link escape",
        "hex": "0010",
      },
      "17": {
        "char": "DC1",
        "dec": 17,
        "description": "device control 1",
        "hex": "0011",
      },
      "18": {
        "char": "DC2",
        "dec": 18,
        "description": "device control 2",
        "hex": "0012",
      },
      "19": {
        "char": "DC3",
        "dec": 19,
        "description": "device control 3",
        "hex": "0013",
      },
      "2": {
        "char": "STX",
        "dec": 2,
        "description": "start of text",
        "hex": "0002",
      },
      "20": {
        "char": "DC4",
        "dec": 20,
        "description": "device control 4",
        "hex": "0014",
      },
      "21": {
        "char": "NAK",
        "dec": 21,
        "description": "negative acknowledge",
        "hex": "0015",
      },
      "22": {
        "char": "SYN",
        "dec": 22,
        "description": "synchronize",
        "hex": "0016",
      },
      "23": {
        "char": "ETB",
        "dec": 23,
        "description": "end transmission block",
        "hex": "0017",
      },
      "24": {
        "char": "CAN",
        "dec": 24,
        "description": "cancel",
        "hex": "0018",
      },
      "25": {
        "char": "EM",
        "dec": 25,
        "description": "end of medium",
        "hex": "0019",
      },
      "26": {
        "char": "SUB",
        "dec": 26,
        "description": "substitute",
        "hex": "001A",
      },
      "27": {
        "char": "ESC",
        "dec": 27,
        "description": "escape",
        "hex": "001B",
      },
      "28": {
        "char": "FS",
        "dec": 28,
        "description": "file separator",
        "hex": "001C",
      },
      "29": {
        "char": "GS",
        "dec": 29,
        "description": "group separator",
        "hex": "001D",
      },
      "3": {
        "char": "ETX",
        "dec": 3,
        "description": "end of text",
        "hex": "0003",
      },
      "30": {
        "char": "RS",
        "dec": 30,
        "description": "record separator",
        "hex": "001E",
      },
      "31": {
        "char": "US",
        "dec": 31,
        "description": "unit separator",
        "hex": "001F",
      },
      "4": {
        "char": "EOT",
        "dec": 4,
        "description": "end of transmission",
        "hex": "0004",
      },
      "5": {
        "char": "ENQ",
        "dec": 5,
        "description": "enquiry",
        "hex": "0005",
      },
      "6": {
        "char": "ACK",
        "dec": 6,
        "description": "acknowledge",
        "hex": "0006",
      },
      "7": {
        "char": "BEL",
        "dec": 7,
        "description": "bell (ring)",
        "hex": "0007",
      },
      "8": {
        "char": "BS",
        "dec": 8,
        "description": "backspace",
        "hex": "0008",
      },
      "9": {
        "char": "HT",
        "dec": 9,
        "description": "horizontal tab",
        "hex": "0009",
      },
    }
  `)
})
