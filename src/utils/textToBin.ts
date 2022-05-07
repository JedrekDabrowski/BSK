/**
 * Zamienia tekst na postać binarną oraz uzupełnia długość do pad miejsc(zerami na początku)
 * @param text Tekst wejściowy do zamainy na podstać binarną.
 * @param pad Liczba miejsc do uzupełnienia
 * @returns Postać binarna zaszyfrowanego tekstu.
 */
export const textToBin = (text: string, pad: number) => {
    return text
        .split('')
        .map((char) => char.charCodeAt(0).toString(2).padStart(pad, '0'))
        .join('');
};

export const textToBinDES = (text: string, pad: number) => {
    const binText = text
        .split('')
        .map((char) => char.charCodeAt(0).toString(2).padStart(pad, '0'))
        .join('');
    if (binText.length % 64 === 0) return binText;
    const numberOfBlocks = Math.floor(binText.length / 64);
    return binText.padStart((numberOfBlocks + 1) * 64, '0');
};
