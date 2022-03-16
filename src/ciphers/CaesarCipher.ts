export const encrypt = (text: string, shift: number) => {
    let encryptedText: string = '';
    shift = shift % 1024;

    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];

        if (letter === letter.toUpperCase())
            encryptedText = encryptedText.concat(String.fromCharCode((letter.charCodeAt(0) + shift) % 1024));
        else encryptedText = encryptedText.concat(String.fromCharCode((letter.charCodeAt(0) + shift) % 1024));
    }

    return encryptedText;
};

export const decrypt = (text: string, shift: number) => {
    let decryptedText: string = '';
    shift = shift % 1024;

    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];

        if (letter === letter.toUpperCase())
            decryptedText = decryptedText.concat(String.fromCharCode((letter.charCodeAt(0) + (1024 - shift)) % 1024));
        else decryptedText = decryptedText.concat(String.fromCharCode((letter.charCodeAt(0) + (1024 - shift)) % 1024));
    }

    return decryptedText;
};
