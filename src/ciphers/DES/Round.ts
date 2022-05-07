import { permutation } from './Permutation';
import { xor } from './Xor';
import { sBox } from './Sbox';
import { E, P } from '../../const/DesConst';

export const round = (input: string, key: string): string => {
    let left: string = input.substring(0, 32);
    let right: string = input.substring(32, 64);
    let tmp: string = right;

    tmp = permutation(E, tmp);

    tmp = xor(tmp, key);

    tmp = sBox(tmp);

    tmp = permutation(P, tmp);

    left = xor(left, tmp);

    return right + left;
};
