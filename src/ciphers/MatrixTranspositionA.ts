const NUMBER_OF_ROWS: number = 4;

export const encrypt = (text: string, key: string): string => {
    const arrayFromText: string[] = [...text];
    const arrayFromKey = key.split('-');

    let i: number = 0;
    let matrix = [];
    let encryptedText: string = '';

    while (i < arrayFromText.length) {
        const column: string[] = arrayFromText.slice(i, (i += NUMBER_OF_ROWS));
        if (column.length < NUMBER_OF_ROWS) column.push(' ');
        matrix.push(column);
    }
    matrix.forEach((column: string[]) => {
        arrayFromKey.forEach((numberOfColumn) => {
            const value = column[parseInt(numberOfColumn) - 1];
            encryptedText = value !== undefined ? encryptedText.concat(value) : encryptedText.concat('');
        });
    });
    return encryptedText;
};

export const decrypt = (text: string, key: string): string => {
    const arrayFromText: string[] = [...text];
    const arrayFromKey: number[] = key.split('-').map((a) => parseInt(a));

    let i: number = 0;
    let j: number = 0;
    let matrix = [];
    const out: string[][] = [];
    const decryptedText: string[] = [];

    while (i < arrayFromText.length) {
        let column: string[] = arrayFromText.slice(i, (i += NUMBER_OF_ROWS));
        matrix.push(column);
    }

    matrix.forEach((block) => {
        j = 0;
        let blokOfDecryptedText: string[] = [];

        block.forEach((character: string) => {
            console.log(blokOfDecryptedText);

            blokOfDecryptedText[arrayFromKey[j] - 1] = character;
            j++;
        });
        out.push([...blokOfDecryptedText]);
    });
    out.forEach((block) => {
        block.forEach((character: string) => {
            decryptedText.push(character);
        });
    });

    return decryptedText.join('').trimEnd();
};
