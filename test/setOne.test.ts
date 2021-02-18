import { setOne } from '../src';

describe('setOne', () => {
  test('challenge one', () => {
    const hex =
      '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
    const base64 =
      'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';

    expect(setOne.challengeOne(hex)).toEqual(base64);
  });
  test('challenge two', () => {
    const hexOne = '1c0111001f010100061a024b53535009181c';
    const hexTwo = '686974207468652062756c6c277320657965';

    const xor = '746865206b696420646f6e277420706c6179';

    expect(setOne.challengeTwo(hexOne, hexTwo)).toEqual(xor);
  });
});
