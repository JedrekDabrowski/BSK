import { IP } from '../../const/DesConst';
export const initialPermutation = (bits: string) => {
    const bitsArray = bits.split('');
    const bitsArrayAfterIP: string[] = [];
    console.log(bitsArray[58 - 1]);
    IP.forEach((i) => bitsArrayAfterIP.push(bitsArray[i - 1]));
    return bitsArrayAfterIP;
};
