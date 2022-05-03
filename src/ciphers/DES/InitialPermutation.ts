import { IP } from '../../const/DesConst';
export const initialPermutation = (bits: string) => {
    const bitsArray = bits.split('');
    const bitsArrayAfterIP: string[] = [];
    IP.forEach((i) => bitsArrayAfterIP.push(bitsArray[i - 1]));
    return bitsArrayAfterIP;
};
