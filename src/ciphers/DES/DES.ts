import { textToBinDES, textToBin, binToText } from '../../utils';
import { initialPermutation } from './InitialPermutation';
import { sBox } from './Sbox';

export const DESCipher = (text: string) => {
    const bitsArray = textToBinDES(text);
    console.log('bitsArray', bitsArray);
    const afterIntitailPermutation = bitsArray.map((block) => initialPermutation(block));
    console.log('afterIntitailPermutation', afterIntitailPermutation);

    console.log(textToBin('KAMILSLIMAK', 8));

    console.log(
        binToText(
            '0100100100100000011011000110111101110110011001010010000001001010011000010111011001100001010100110110001101110010011010010111000001110100',
        ),
    );
    sBox(
        '0100100100100000011011000110111101110110011001010010000001001010011000010111011001100001010100110110001101110010011010010111000001110100',
    );
    return 'KAMILSLIMAK';
};
