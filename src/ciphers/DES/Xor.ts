/**
 * Operacje xor na dwóch ciągach w postaci binarnej
 * @param bin1 Pierwszy ciąg tekstowy w postaci binarnej
 * @param bin2 Drugi ciąg tekstowy w postaci binarnej
 * @returns Arugment wejściowy po operacji xor
 **/

export const xor = (bin1: string, bin2: string): string => {
    let afterXor: string = '';

    for (let i: number = 0; i < 48; i++) {
        // operacje xor na konkretnych bitach
        let tmp: string = (parseInt(bin1[i]) ^ parseInt(bin2[i])).toString();
        afterXor = afterXor.concat(tmp);
    }

    return afterXor;
};
