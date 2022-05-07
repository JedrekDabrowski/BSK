import { permutation } from './Permutation';
import { leftShift } from './LeftShift';
import { PC1, PC2, shift } from '../../const/DesConst';
import { textToBinDES } from '../../utils';
import { modifyKey } from './ModifyKey';

export const generateKeys = (key: string): string[] => {
    const keys: string[] = new Array(16);
    let keyInBinary: string = textToBinDES(key, 0);
    keyInBinary = modifyKey(keyInBinary);
    keyInBinary = permutation(PC1, keyInBinary);
    for (let i: number = 0; i < 16; i++) {
        keyInBinary =
            leftShift(keyInBinary.substring(0, 28), shift[i]) + leftShift(keyInBinary.substring(28, 56), shift[i]);

        keys[i] = permutation(PC2, keyInBinary);
    }

    return keys;
};
