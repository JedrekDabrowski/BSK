export const encrypt = (text: string, key: string): string => {
    const arrayFromText: string[] = [...text.replace(/ /g, '')];
    const arrayFromKey: string[] = [...key];
    const numberOfRows: number =
        arrayFromText.length / arrayFromKey.length !== 1
            ? Math.floor(arrayFromText.length / arrayFromKey.length) + 1
            : Math.floor(arrayFromText.length / arrayFromKey.length);
    const numberOfColumns: number = arrayFromKey.length;

    let matrix = new Array(numberOfColumns).fill(' ').map(() => new Array(numberOfRows).fill(' '));
    let encryptedText: string = '';

    for (let i: number = 0; i < arrayFromText.length; i++) {
        matrix[i % numberOfColumns] = matrix[i % numberOfColumns].concat(arrayFromText[i]);
    }

    const map: Record<string, number[]> = {};

    for (let i: number = 0; i < arrayFromKey.length; i++) {
        if (Object.keys(map).includes(arrayFromKey[i])) {
            const array = map[arrayFromKey[i]];
            array.push(i);
            map[arrayFromKey[i]] = array;
        } else {
            map[arrayFromKey[i]] = [i];
        }
    }

    const sortedMap = Object.entries(map).sort();

    sortedMap.forEach((block) => {
        block[1].forEach((value) => {
            encryptedText = encryptedText.concat(matrix[value].join(''));
        });
    });

    return encryptedText;
};

export const decrypt = (text: string, key: string): string => {
    const arrayFromText = text.split(' ').filter((x) => x !== '');
    const arrayFromKey: string[] = [...key];
    const numberOfRows: number =
        [...text].length / arrayFromKey.length !== 1
            ? Math.floor([...text].length / arrayFromKey.length) + 1
            : Math.floor(arrayFromText.length / arrayFromKey.length);
    const numberOfColumns: number = arrayFromKey.length;

    let x: number = 0;
    let matrix = [];
    let decryptedText: string = '';

    const map: Record<string, number[]> = {};

    for (let i: number = 0; i < arrayFromKey.length; i++) {
        if (Object.keys(map).includes(arrayFromKey[i])) {
            const array = map[arrayFromKey[i]];
            array.push(i);
            map[arrayFromKey[i]] = array;
        } else {
            map[arrayFromKey[i]] = [i];
        }
    }
    const sortedMap = Object.entries(map).sort();

    sortedMap.forEach((block) => {
        block[1].forEach((value) => {
            if (arrayFromText[x] !== undefined) {
                matrix[value] = [...arrayFromText[x]];
                x++;
            }
        });
    });

    for (let j: number = 0; j < numberOfRows; j++) {
        for (let i: number = 0; i < numberOfColumns; i++) {
            if (matrix[i] !== undefined && matrix[i][j] !== undefined) {
                decryptedText = decryptedText.concat(matrix[i][j]);
            }
        }
    }

    return decryptedText.trim();
};
