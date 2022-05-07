export const xor = (bin1: string, bin2: string): string => {
    let afterXor: string = '';

    for (let i: number = 0; i < 48; i++) {
        let tmp: string = (parseInt(bin1[i]) ^ parseInt(bin2[i])).toString();
        afterXor = afterXor.concat(tmp);
    }

    return afterXor;
};
