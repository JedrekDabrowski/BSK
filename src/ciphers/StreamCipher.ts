import { textToBin } from '../utils';
/**
 * Szyfruje podany tekst z użyciem klucza LSFR.
 * @param text Tekst do zaszyfrowania.
 * @param lsfrKey Wcześniej wygenerowan LSFR.
 * @returns Zaszyfrowany tekst.
 */
export const streamCipher = (text: string, lsfrKey: string) => {
    // Zamieniamy podan tekst na postać binarną
    const binaryText = textToBin(text, 16);
    let cipher: string = '';
    // Podajemy operacje xot r kolejne bity ze słowa wejściowego oraz klucza LFSR
    for (let i: number = 0; i < binaryText.length; i++) {
        cipher += parseInt(binaryText[i]) ^ parseInt(lsfrKey[i]);
    }
    // Dzielimy wygenerowany szyfr po 16 bitów
    const chars = cipher.match(/.{1,16}/g)!;
    //Zamieniamy 16 bitowe ciągi na litery
    return chars.map((char) => String.fromCharCode(parseInt(char, 2))).join('');
};
