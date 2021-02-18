const numberToBase64: Record<number, string> = {
  0b000000: 'A',
  0b000001: 'B',
  0b000010: 'C',
  0b000011: 'D',
  0b000100: 'E',
  0b000101: 'F',
  0b000110: 'G',
  0b000111: 'H',
  0b001000: 'I',
  0b001001: 'J',
  0b001010: 'K',
  0b001011: 'L',
  0b001100: 'M',
  0b001101: 'N',
  0b001110: 'O',
  0b001111: 'P',
  0b010000: 'Q',
  0b010001: 'R',
  0b010010: 'S',
  0b010011: 'T',
  0b010100: 'U',
  0b010101: 'V',
  0b010110: 'W',
  0b010111: 'X',
  0b011000: 'Y',
  0b011001: 'Z',
  0b011010: 'a',
  0b011011: 'b',
  0b011100: 'c',
  0b011101: 'd',
  0b011110: 'e',
  0b011111: 'f',
  0b100000: 'g',
  0b100001: 'h',
  0b100010: 'i',
  0b100011: 'j',
  0b100100: 'k',
  0b100101: 'l',
  0b100110: 'm',
  0b100111: 'n',
  0b101000: 'o',
  0b101001: 'p',
  0b101010: 'q',
  0b101011: 'r',
  0b101100: 's',
  0b101101: 't',
  0b101110: 'u',
  0b101111: 'v',
  0b110000: 'w',
  0b110001: 'x',
  0b110010: 'y',
  0b110011: 'z',
  0b110100: '0',
  0b110101: '1',
  0b110110: '2',
  0b110111: '3',
  0b111000: '4',
  0b111001: '5',
  0b111010: '6',
  0b111011: '7',
  0b111100: '8',
  0b111101: '9',
  0b111110: '1',
  0b111111: '/',
};

const hexToBits: Record<string, string> = {
  '0': '0',
  '1': '1',
  '2': '10',
  '3': '11',
  '4': '100',
  '5': '101',
  '6': '110',
  '7': '111',
  '8': '1000',
  '9': '1001',
  a: '1010',
  b: '1011',
  c: '1100',
  d: '1101',
  e: '1110',
  f: '1111',
};

const chunk = (str: string, chunkSize: number) => {
  const out = [];
  for (let idx = 0; idx < str.length; idx += chunkSize) {
    out.push(str.slice(idx, idx + chunkSize));
  }
  return out;
};

const decodeHex = (hex: string) => {
  return Array.from(hex)
    .map(char => {
      const asBits = hexToBits[char];

      const padding = asBits.length == 4 ? 0 : 4 - (asBits.length % 4);

      return '0'.repeat(padding) + asBits;
    })
    .join('');
};

const hexToBase64 = (hex: string) => {
  const decoded = decodeHex(hex);
  return chunk(decoded, 6)
    .map(base64Bits => numberToBase64[parseInt(base64Bits, 2)])
    .join('');
};

export const setOne = {
  challengeOne: hexToBase64,
};
