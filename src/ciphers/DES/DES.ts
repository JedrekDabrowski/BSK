import { text2BinaryDES } from '../../utils';
import { initialPermutation } from './InitialPermutation';

export const DESCipher = (text: string) => {
    const bitsArray = text2BinaryDES(text);
    const afterIntitailPermutation = initialPermutation(bitsArray);
};
