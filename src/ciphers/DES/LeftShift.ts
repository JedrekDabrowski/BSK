/**
 * Metoda odpowiedzialna za przesunięcie argumentu w postaci binarnego ciągu
 * o podaną ilość bitów w drugim arugmnencie w lewą stronę
 * @param input Argument wejściowy, który ma być podany przesunięciu
 * @param numberOfBits Liczba bitów o którą ma być przesunięcie w ciągu wejściowym w lewo
 * @returns Argument wejściowy przesunięty o podaną ilośc bitów w lewo
 */
export const leftShift = (input: string, numberOfBits: number): string => {
    const partToShift: string = input.substring(0, numberOfBits);
    let shiftedInput: string[] = input.split('');

    for (let i: number = 0; i < numberOfBits; i++) {
        shiftedInput.shift();
    }
    return shiftedInput.join('').concat(partToShift);
};
