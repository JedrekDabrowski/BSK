import { permutation } from './Permutation';
import { leftShift } from './LeftShift';
import { PC1, PC2, shift } from '../../const/DesConst';
import { textToBinDES } from '../../utils';
import { modifyKey } from './ModifyKey';

/**
 * Generowanie kluczy do algorytmu DES na podstawie argumentu w postaci tekstowej
 * @param key Klucz na podstawie którego generujemy klucze do algorytmu DES
 * @returns Tablica z wygenereowanymi kluczami
 */
export const generateKeys = (key: string): string[] => {
    const keys: string[] = new Array(16);
    //zamiana tekstu na postać binarną,
    // nie uzupełniamy klucza do danej długości - drugi argument funkcji = 0
    let keyInBinary: string = textToBinDES(key, 0);
    // modyfikujemy klucz, aby był długości 64 bity
    keyInBinary = modifyKey(keyInBinary);
    // poddajemy klucz permutacji z użyciemy tablicy P1
    keyInBinary = permutation(PC1, keyInBinary);
    // przesuwamy wartości klucza zgodnie z tablicą shift
    for (let i: number = 0; i < 16; i++) {
        keyInBinary =
            leftShift(keyInBinary.substring(0, 28), shift[i]) + leftShift(keyInBinary.substring(28, 56), shift[i]);

        keys[i] = permutation(PC2, keyInBinary);
    }

    return keys;
};
