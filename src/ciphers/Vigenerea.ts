/**
 * Szyfruje tekst szyfrem Vigenerea.
 * @param inputText Tekst wejściowy do zaszyfrowania zawierający znaki ASCII.
 * @param keyword Klucz wejściowy na podstawie którego zostanie wygenerowany klucz szyrfujący.
 * @returns Tekst zaszyfrowany.
 */
export const encrypt = (inputText: string, keyword: string) => {
    //Generowanie klucza
    const key = generateKey(inputText, keyword);
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        //zamieniamy znaki słowa wejściowego na litery z zakresu 0-25(ASCII)
        if (inputText[i] && key[i]) {
            let x = (inputText[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
            // Ustalenie początku alfabetu oraz
            //dodanie do zaszyfrowanego słowa litery z obliczonego indeksu
            x += 'A'.charCodeAt(0);
            encryptedText += String.fromCharCode(x);
        }
    }
    return encryptedText;
};

/**
 * Odszyfrowuje tekst zaszyfrowany szyfrem Vigenerea.
 * @param encryptedText Tekst wejściowy do odszyfrowania zawierający znaki ASCII.
 * @param keyword Klucz wejściowy na podstawie którego zostanie wygenerowany klucz szyrfujący.
 * @returns Tekst odszyfrowany.
 */
export const decrypt = (encryptedText: string, keyword: string) => {
    //Generowanie klucza
    const key = generateKey(encryptedText, keyword);
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        //zamieniamy znaki słowa wejściowego na litery z zakresu 0-25
        if (encryptedText[i] && key[i]) {
            let x = (encryptedText[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
            // Ustalenie początku alfabetu oraz
            //dodanie do odszyfrowanego słowa litery z obliczonego indeksu
            x += 'A'.charCodeAt(0);
            decryptedText += String.fromCharCode(x);
        }
    }
    return decryptedText;
};

/**
 * Generuje klucz na podstawie tekstu do zaszyfrowania oraz podanego klucza wejściowego.
 * @param inputText Tekst wejściowy do zaszyfrowania zawierający zanki ASCII.
 * @param inputKey Klucz wejściowy zawierający zanki ASCII.
 * @returns Wygenerowany klucz.
 */
const generateKey = (inputText: string, inputKey: string) => {
    const key = inputKey.split('');
    //Gdy długość argumentów wejściowych jest równa zwracamy klucz.
    if (inputText.length === inputKey.length) return key.join('');
    else {
        let temp = inputKey.length;
        //Iterujemy po słowie wejściowym, a następnie dodajemy do generowanego klucza
        //literę z klucza wejściowego z odpowiedniej pozycji
        for (let i = 0; i < inputText.length - temp; i++) {
            key.push(inputKey[i % key.length]);
        }
    }
    return key.join('');
};
