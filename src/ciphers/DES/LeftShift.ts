import {permutation} from "./Permutation";

export const leftShift = (input: string, numberOfBits: number): string => {
    let n: number = input.length * 4;
    let perm: number[] = new Array(n);

    for (let i: number = 0; i < n; i++) {
        perm[i] = (i + 2);
    }
    perm[n - 1] = 1;
    while (numberOfBits-- > 0) {
        input = permutation(perm, input);
    }

    return input;
}