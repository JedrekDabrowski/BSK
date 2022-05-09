/**
 * Uniwersalne metoda do permutacji drugiego argumentu na podstawie pierwszego argumentu(wcześniej zdefiniowana sekwencja)
 * @param sequence Wcześniej zdefiniowana sekwencja, na podstawie której odbywa się permutacja
 * @param input Klucz na podstawie którego generujemy klucze do algorytmu DES
 * @returns Tablica z wygenereowanymi kluczami
 */
export const permutation = (sequence: number[], input: string): string => {
    let output: string = '';

    for (let i: number = 0; i < sequence.length; i++) {
        output += input.charAt(sequence[i] - 1);
    }

    return output;
};
