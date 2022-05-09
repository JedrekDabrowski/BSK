import {generateKeys} from './GenerateKeys';
import {permutation} from './Permutation';
import {binToText, textToBinDES} from '../../utils';
import {IP, IP1} from '../../const/DesConst';
import {round} from './Round';

/**
 * Funkcja szyfrująca podany ciąg tekstowy na podstawie klucza z użyciem algorytmu DES
 * @param text Ciąg tekstowy do szyfrowania
 * @param key Klucz na podstawie którego szyfrujemy tekst
 * @returns Zaszyfrowany tekst
 */
export const encrypt = (text: string, key: string): string => {
    let output = '';
    // generowanie kluczy
    const keys: string[] = generateKeys(key);

    // zamiana tekstu na postać binarną oraz uzpełnienie do bloków 16 bitowych
    let textBin: string = textToBinDES(text, 16);
    const blocks = textBin.match(/.{1,64}/g);
    // szyfrowanie wszytkich bloków 64 bitowych algorytmem DES
    blocks &&
    blocks.forEach((block) => {
        block = permutation(IP, block);

        for (let i: number = 0; i < 16; i++) {
            block = round(block, keys[i]);
        }
        block = block.substring(32, 64) + block.substring(0, 32);
        // permutacja końcowa na podstawie tablicy IP1
        block = permutation(IP1, block);
        output = output.concat(block);
    });
    // zamiana postaci binarnej na tekst
    // @ts-ignore
    return binToText(output);
};

/**
 * Funkcja deszyfrująca podany ciąg tekstowy na podstawie klucza z użyciem algorytmu DES
 * @param text Ciąg tekstowy do odszyfrowania
 * @param key Klucz na podstawie którego deszyfrujemy tekst
 * @returns Odszyfrowany tekst
 */
export const decrypt = (text: string, key: string): string => {
    let output = '';

    // generowanie kluczy
    const keys: string[] = generateKeys(key);
    // zamiana tekstu na postać binarną oraz uzpełnienie do bloków 16 bitowych
    let textBin: string = textToBinDES(text, 16);
    const blocks = textBin.match(/.{1,64}/g);
    // deszyfrowanie wszytkich bloków 64 bitowych algorytmem DES
    blocks &&
    blocks.forEach((block) => {
        block = permutation(IP, block);

        for (let i: number = 15; i > -1; i--) {
            block = round(block, keys[i]);
        }

        block = block.substring(32, 64) + block.substring(0, 32);

        block = permutation(IP1, block);
        output = output.concat(block);
    });
    // zamiana postaci binarnej na tekst
    // @ts-ignore
    return binToText(output);
};
