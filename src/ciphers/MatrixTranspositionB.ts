export const encrypt = (text: string, key: string): string => {
    const arrayFromText: string[] = [...text.replace(/ /g, '')];
    const arrayFromKey: string[] = [...key];
    const numberOfRows: number =
        arrayFromText.length / arrayFromKey.length !== 0
            ? Math.round(arrayFromText.length / arrayFromKey.length + 1)
            : Math.round(arrayFromText.length / arrayFromKey.length);
    const numberOfColumns: number = arrayFromKey.length;

    let x: number = 0;
    let matrix = new Array(numberOfColumns).fill('*').map(() => new Array(numberOfRows).fill('*'));
    let encryptedText: string = '';

    for (let j: number = 0; j < numberOfRows; j++) {
        for (let i: number = 0; i < numberOfColumns; i++) {
            matrix[i][j] = arrayFromText[x];
            if (matrix[i][j] === undefined) {
                matrix[i][j] = ' ';
            } else if (i === 0 && j === numberOfRows - 1 && matrix[i][j] !== ' ') {
                matrix[i][j] = arrayFromText[x] + ' ';
            }
            x++;
        }
    }
    console.log(matrix);

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
    console.log(arrayFromText);
    const arrayFromKey: string[] = [...key];
    const numberOfRows: number = Math.round([...text.replace(/ /g, '')].length / arrayFromKey.length + 1);
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
            console.log(arrayFromText[x]);
            console.log(arrayFromText.length);

            matrix[value] = [...arrayFromText[x]];
            x++;
        });
    });

    for (let j: number = 0; j < numberOfRows; j++) {
        for (let i: number = 0; i < numberOfColumns; i++) {
            if (matrix[i][j] !== undefined) {
                decryptedText = decryptedText.concat(matrix[i][j]);
            }
        }
    }

    return decryptedText;
};
