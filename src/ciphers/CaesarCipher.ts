const ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ abcdefghijklmnopqrstuvwyxz';
const LENGTH_OF_ALPHABET: number = ALPHABET.length;
export const encrypt = (text: string, shift: number) => {
    let encryptedText: string = '';
    shift = shift % LENGTH_OF_ALPHABET;

    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];
        let letterAfterShift = ALPHABET.charAt((ALPHABET.indexOf(letter) + shift) % LENGTH_OF_ALPHABET);

        encryptedText = encryptedText.concat(letterAfterShift);
    }

    return encryptedText;
};

export const decrypt = (text: string, shift: number) => {
    let decryptedText: string = '';
    shift = shift % LENGTH_OF_ALPHABET;

    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];
        let letterAfterShift = ALPHABET.charAt(
            (ALPHABET.indexOf(letter) + (LENGTH_OF_ALPHABET - shift)) % LENGTH_OF_ALPHABET,
        );

        decryptedText = decryptedText.concat(letterAfterShift);
    }

    return decryptedText;
};
