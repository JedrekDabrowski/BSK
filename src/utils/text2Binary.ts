/**
 * Zamienia tekst na postać binarną oraz uzupełnia długość do 16 miejsc(zerami na początku)
 * @param text Tekst wejściowy do zamainy na podstać binarną.
 * @returns Postać binarna zaszyfrowanego tekstu.
 */
export const text2Binary = (text: string) => {
    return text
        .split('')
        .map((char) => char.charCodeAt(0).toString(2).padStart(16, '0'))
        .join('');
};
