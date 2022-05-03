/**
 * Zamienia tekst na postać binarną oraz uzupełnia długość do 16 miejsc(zerami na początku)
 * @param text Tekst wejściowy do zamainy na podstać binarną.
 * @returns Postać binarna zaszyfrowanego tekstu.
 */
export const textToBin = (text: string, pad: number) => {
    return text
        .split('')
        .map((char) => char.charCodeAt(0).toString(2).padStart(pad, '0'))
        .join('');
};

export const textToBinDES = (text: string) => {
    const binaryText = text
        .split('')
        .map((char) => char.charCodeAt(0).toString(2))
        .join('');
    let bitArray = binaryText.match(/.{1,64}/g);
    if (bitArray) {
        bitArray[bitArray.length - 1] = ('1' + bitArray[bitArray.length - 1]).padStart(64, '0');
    }

    return bitArray || [];
};
