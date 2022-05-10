import { permutation } from './Permutation';
import { xor } from './Xor';
import { sBox } from './Sbox';
import { E, P } from '../../const/DesConst';

/**
 * Funkcja przujmuje ciąg znaków o długości 64 bitów,
 * dzieli ciąg na dwie cześci po 32 bitów,
 * a następnie roszerza obie połowy do długości 48 bitów
 * @param input Argument wejściowy, który ma być podany operacji round
 * @param key Ciąg bitów o długosci 48 bity
 * @returns Arugment wejściowy przekształcony operacją round
 **/

export const round = (input: string, key: string): string => {
    let left: string = input.substring(0, 32);
    let right: string = input.substring(32, 64);
    let tmp: string = right;
    // permutajca rozszerzająca na podstawie tablicy E
    tmp = permutation(E, tmp);

    // operacja xor
    tmp = xor(tmp, key);

    // funckja sBox
    tmp = sBox(tmp);

    // permutajca na podstawie tablicy P
    tmp = permutation(P, tmp);

    // operacja xor
    left = xor(left, tmp);

    return right + left;
};
