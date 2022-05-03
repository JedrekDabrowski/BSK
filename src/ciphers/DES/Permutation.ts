import {binToText, textToBin} from "../../utils";

export const permutation = (sequence: number[], input: string): string => {
    let output = '';
    input = textToBin(input, 8);

    for (const element of sequence) {
        output += input.charAt(element - 1);
    }
    output = binToText(output);

    return output;
}