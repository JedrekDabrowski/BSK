/**
 * Modyfikacja klucza, aby zawsze był długości 64 bity
 * @param keyInBinary Klucz w postaci ciągu binarnego
 * @returns Uzupełniony klucz do długości 64
 */
export const modifyKey = (keyInBinary: string) => {
    // gdy klucz jest długości 64 lub więcej to zwracamy pierwsze 64 bity klucza
    if (keyInBinary.length >= 64) return keyInBinary.substring(0, 64);
    // gdy klucz jest za krótki, uzupełniamy zerami na początku
    return keyInBinary.padStart(64, '0');
};
