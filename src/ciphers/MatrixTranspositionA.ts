const NUMBER_OF_ROWS: number = 4;

export const encrypt = (text: string, key: string): string => {
    const arrayFromText = [...text];
    const arrayFromKey = key.split('-');

    let i: number = 0;
    let matrix = [];
    let encryptedText: string = '';

    while (i < arrayFromText.length) {
        let column: string[] = arrayFromText.slice(i, (i += NUMBER_OF_ROWS));
        matrix.push(column);
    }

    matrix.forEach((column: string[]) => {
        arrayFromKey.forEach((numberOfColumn) => {
            const value = column[parseInt(numberOfColumn) - 1];
            encryptedText = value !== undefined ? encryptedText.concat(value) : encryptedText.concat(' ');
        });
    });
    return encryptedText;
};

export const decrypt = (text: string, key: string): string => {
    const arrayFromText = [...text];
    const arrayFromKey = key.split('-');

    let i: number = 0;
    let j: number = 0;
    let matrix = [];
    let out = [];
    let decryptedText = [];

    while (i < arrayFromText.length) {
        let column: string[] = arrayFromText.slice(i, (i += NUMBER_OF_ROWS));
        matrix.push(column);
    }

    matrix.forEach((block) => {
        j = 0;
        let blokOfDecryptedText = [];
        block.forEach((character: string) => {
            blokOfDecryptedText[parseInt(arrayFromKey[j]) - 1] = character;
            j++;
        });

        out.push([...blokOfDecryptedText]);
    });

    out.forEach((block: string[]) => {
        block.forEach((character: string) => {
            decryptedText.push(character);
        });
    });

    return decryptedText.join('');
};
