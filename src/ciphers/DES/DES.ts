import {textToBinDES} from '../../utils';
import {initialPermutation} from './InitialPermutation';

export const encrypt = (text: string, key: string): string => {
    const bitsArray = textToBinDES(text);
    const afterIntitailPermutation = bitsArray.map((block) => initialPermutation(block));

    return '';
};

export const decrypt = (text: string, key: string): string => {
    return '';
};
