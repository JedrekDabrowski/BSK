/**
 * Uniwersalne metoda do permutacji drugiego argumentu na podstawie pierwszego argumentu(wcześniej zdefiniowana sekwencja)
 * @param permutationSequence Wcześniej zdefiniowana sekwencja, na podstawie której odbywa się permutacja
 * @param input Klucz na podstawie którego generujemy klucze do algorytmu DES
 * @returns Tablica z wygenereowanymi kluczami
 */
export const permutation = (permutationSequence: number[], input: string): string => {
    let output: string = '';

    for (const element of permutationSequence) {
        output += input.charAt(element - 1);
    }

    return output;
};
