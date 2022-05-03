import {permutation} from "./Permutation";
import {leftShift} from "./LeftShift";
import {PC1, PC2, shift} from "../../const/DesConst";

export const generateKeys = (key: string): string[] => {

    const keys: string[] = new Array(16);
    key = permutation(PC1, key);

    for (let i: number = 0; i < 16; i++) {
        key = leftShift(key.substring(0, 7), shift[i]) + leftShift(key.substring(7, 14), shift[i]);
        keys[i] = permutation(PC2, key);
    }

    return keys;
}
