import { binToText, textToBinDES } from '../../utils';

export const permutation = (sequence: number[], input: string): string => {
    let output: string = '';

    for (let i: number = 0; i < sequence.length; i++) {
        output += input.charAt(sequence[i] - 1);
    }

    return output;
};
