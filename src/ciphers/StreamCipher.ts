import { text2Binary } from '../utils';

export const streamCipher = (text: string, lfsrKey: string) => {
    const binaryText = text2Binary(text);
    let cipher: string = '';

    for (let i: number = 0; i < binaryText.length; i++) {
        cipher += parseInt(binaryText[i]) ^ parseInt(lfsrKey[i]);
    }
    const chars = cipher.match(/.{1,16}/g)!;

    return chars.map((char) => String.fromCharCode(parseInt(char, 2))).join('');
};
