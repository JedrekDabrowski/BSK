const ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwyxz';
const LENGTH_OF_ALPHABET: number = ALPHABET.length;

/**
 * Szyfruje tekst szyfrem Cezara.
 * @param text Tekst wejściowy do zaszyfrowania zawierający znaki z podanego alfabetu(ALPHABET).
 * @param shift Liczba oznaczjąca wielkość przesunięcia liter w alfabecie
 * @returns Tekst zaszyfrowany szyfrem Cezara.
 */
export const encrypt = (text: string, shift: number) => {
    let encryptedText: string = '';
    // Przesunięcie nie może wynosić więcej niż dłguość alfabetu
    shift = shift % LENGTH_OF_ALPHABET;

    //Iterujemy po słowie wejściowym oraz przesuwamy każdą z liter
    //o wartość podaną w argumencie shift w prawo względem początku alfabetu
    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];
        let letterAfterShift = ALPHABET.charAt((ALPHABET.indexOf(letter) + shift) % LENGTH_OF_ALPHABET);
        encryptedText = encryptedText.concat(letterAfterShift);
    }
    return encryptedText;
};

/**
 * Odszyfrowuje tekst zaszyfrowany szyfrem Cezara.
 * @param text Tekst wejściowy do odszyfrowania zawierający znaki z podanego alfabetu(ALPHABET).
 * @param shift Liczba oznaczjąca wielkość przesunięcia liter w alfabecie(taka sama jak przy szyfrowaniu).
 * @returns Tekst odszyfrowany.
 */
export const decrypt = (text: string, shift: number) => {
    let decryptedText: string = '';
    // Przesunięcie nie może wynosić więcej niż dłguość alfabetu
    shift = shift % LENGTH_OF_ALPHABET;

    //Iterujemy po słowie wejściowym oraz przesuwamy każdą z liter
    //o wartość podaną w argumencie shift w lewo względem początku alfabetu
    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];
        let letterAfterShift = ALPHABET.charAt(
            (ALPHABET.indexOf(letter) + (LENGTH_OF_ALPHABET - shift)) % LENGTH_OF_ALPHABET,
        );
        decryptedText = decryptedText.concat(letterAfterShift);
    }
    return decryptedText;
};
