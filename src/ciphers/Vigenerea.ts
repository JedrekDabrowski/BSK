export const encrypt = (inputText: string, keyword: string) => {
    const key = generateKey(inputText, keyword);
    let encryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
        // converting in range 0-25
        if (inputText[i] && key[i]) {
            let x = (inputText[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
            // convert into alphabets(ASCII)
            x += 'A'.charCodeAt(0);
            encryptedText += String.fromCharCode(x);
        }
    }
    return encryptedText;
};

export const decrypt = (encryptedText: string, keyword: string) => {
    const key = generateKey(encryptedText, keyword);
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        // converting in range 0-25
        if (encryptedText[i] && key[i]) {
            let x = (encryptedText[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
            // convert into alphabets(ASCII)
            x += 'A'.charCodeAt(0);
            decryptedText += String.fromCharCode(x);
        }
    }
    return decryptedText;
};

const generateKey = (inputText: string, inputKey: string) => {
    const key = inputKey.split('');
    if (inputText.length == inputKey.length) return key.join('');
    else {
        let temp = inputKey.length;
        for (let i = 0; i < inputText.length - temp; i++) {
            key.push(inputKey[i % key.length]);
        }
    }
    return key.join('');
};
