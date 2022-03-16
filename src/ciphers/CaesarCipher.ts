const ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LENGTH: number = ALPHABET.length;

export const encrypt = (text: string, shift: number) => {
    let encryptedText: string = '';
    shift = shift % 32;

    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];

        if (letter === letter.toUpperCase())
            encryptedText = encryptedText.concat(
                String.fromCharCode(((letter.charCodeAt(0) + shift - 65) % ALPHABET_LENGTH) + 65),
            );
        else
            encryptedText = encryptedText.concat(
                String.fromCharCode(((letter.charCodeAt(0) + shift - 97) % ALPHABET_LENGTH) + 97),
            );
    }

    return encryptedText;
};

export const decrypt = (text: string, shift: number) => {
    let decryptedText: string = '';
    shift = shift % 32;

    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];

        if (letter === letter.toUpperCase())
            decryptedText = decryptedText.concat(
                String.fromCharCode(((letter.charCodeAt(0) + (26 - shift - 65)) % ALPHABET_LENGTH) + 65),
            );
        else
            decryptedText = decryptedText.concat(
                String.fromCharCode(((letter.charCodeAt(0) + (26 - shift) - 97) % ALPHABET_LENGTH) + 97),
            );
    }

    return decryptedText;
};
