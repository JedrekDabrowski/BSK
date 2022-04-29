import { text2BinaryDES } from '../../utils';
import { initialPermutation } from './InitialPermutation';

export const DESCipher = (text: string) => {
    const bitsArray = text2BinaryDES(text);
    console.log('bitsArray', bitsArray);
    const afterIntitailPermutation = bitsArray.map((block) => initialPermutation(block));
    console.log('afterIntitailPermutation', afterIntitailPermutation);

    return 'KAMILSLIMAK';
};
