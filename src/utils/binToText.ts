/**
 * Zamiana ciągu znaków w postaci binarnej na postać tekstową
 * @param binary Słowo w postacji ciagu znaków w postaci binarnej
 * @returns Postać tekstowa argumentu wejściowego
 */
export const binToText = (binary: string) =>
    binary
        .match(/.{1,16}/g)
        ?.map((el) => String.fromCharCode(parseInt(el, 2)))
        .join('');
