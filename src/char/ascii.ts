import { keyBy } from '../obj/keyBy'

type IsAsciiFn = {
  (n: number): boolean
  (s: string): boolean
}

export const isAscii: IsAsciiFn = (v) =>
  typeof v === 'string'
    ? Boolean(v.match(/^[\x20-\x7e]*$/))
    : v >= 0x20 && v <= 0x7e
export const trimNonAscii = (s: string) => s.replace(/[^\x20-\x7e]*/g, '')
export const asciify = trimNonAscii

// references https://www.w3schools.com/charsets/ref_utf_basic_latin.asp

const tsv = `
NUL	0	0000	null character
SOH	1	0001	start of header
STX	2	0002	start of text
ETX	3	0003	end of text
EOT	4	0004	end of transmission
ENQ	5	0005	enquiry
ACK	6	0006	acknowledge
BEL	7	0007	bell (ring)
BS	8	0008	backspace
HT	9	0009	horizontal tab
LF	10	000A	line feed
VT	11	000B	vertical tab
FF	12	000C	form feed
CR	13	000D	carriage return
SO	14	000E	shift out
SI	15	000F	shift in
DLE	16	0010	data link escape
DC1	17	0011	device control 1
DC2	18	0012	device control 2
DC3	19	0013	device control 3
DC4	20	0014	device control 4
NAK	21	0015	negative acknowledge
SYN	22	0016	synchronize
ETB	23	0017	end transmission block
CAN	24	0018	cancel
EM	25	0019	end of medium
SUB	26	001A	substitute
ESC	27	001B	escape
FS	28	001C	file separator
GS	29	001D	group separator
RS	30	001E	record separator
US	31	001F	unit separator
DEL	127	007F	delete (rubout)
`

type ControlChar = {
  char: string
  dec: number
  hex: string
  description: string
}
export const controlCharLib = keyBy(
  tsv
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
    .map(
      ([char, dec, hex, description]): ControlChar => ({
        char,
        dec: Number(dec),
        hex,
        description,
      })
    ),
  (v) => String(v.dec)
)
