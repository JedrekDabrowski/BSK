/**
 * Szyfruje tekst szyfrem macierzowym.
 * @param text Tekst wejściowy do zaszyfrowania.
 * @param key Klucz wejściowy.
 * @returns Tekst zaszyfrowany.
 */

export const encrypt = (text: string, key: string): string => {
    const arrayFromText: string[] = [...text.replace(/ /g, '')];
    const arrayFromKey: string[] = [...key];
    //Obliczamy liczbę wierszy macierzy
    const numberOfRows: number =
        arrayFromText.length / arrayFromKey.length !== 1
            ? Math.floor(arrayFromText.length / arrayFromKey.length) + 1
            : Math.floor(arrayFromText.length / arrayFromKey.length);
    const numberOfColumns: number = arrayFromKey.length;

    //Tworzymy macierzy
    let matrix = new Array(numberOfColumns).fill(' ').map(() => new Array(numberOfRows).fill(' '));
    let encryptedText: string = '';

    for (let i: number = 0; i < arrayFromText.length; i++) {
        matrix[i % numberOfColumns] = matrix[i % numberOfColumns].concat(arrayFromText[i]);
    }

    const map: Record<string, number[]> = {};
    //Tworzymy mape wartości [litera z klucza]: numer kolumny
    for (let i: number = 0; i < arrayFromKey.length; i++) {
        if (Object.keys(map).includes(arrayFromKey[i])) {
            const array = map[arrayFromKey[i]];
            array.push(i);
            map[arrayFromKey[i]] = array;
        } else {
            map[arrayFromKey[i]] = [i];
        }
    }
    //Sortujemy alfabetycznie wcześniej stworzoną mapę
    const sortedMap = Object.entries(map).sort();
    //Przechodzimy po posortowanej mapie i
    //wstawiamy do zaszyfrowanego słowa kolejne kolumny macierzy pod zadanym indeksem
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
    //Obliczamy liczbę wierszy macierzy
    const numberOfRows: number =
        [...text].length / arrayFromKey.length !== 1
            ? Math.floor([...text].length / arrayFromKey.length) + 1
            : Math.floor(arrayFromText.length / arrayFromKey.length);
    const numberOfColumns: number = arrayFromKey.length;

    let x: number = 0;
    let matrix: string[][] = [];
    let decryptedText: string = '';

    const map: Record<string, number[]> = {};
    //Tworzymy mape wartości [litera z klucza]: numer kolumny
    for (let i: number = 0; i < arrayFromKey.length; i++) {
        if (Object.keys(map).includes(arrayFromKey[i])) {
            const array = map[arrayFromKey[i]];
            array.push(i);
            map[arrayFromKey[i]] = array;
        } else {
            map[arrayFromKey[i]] = [i];
        }
    }
    //Sortujemy alfabetycznie wcześniej stworzoną mapę
    const sortedMap = Object.entries(map).sort();

    sortedMap.forEach((block) => {
        block[1].forEach((value) => {
            if (arrayFromText[x] !== undefined) {
                matrix[value] = [...arrayFromText[x]];
                x++;
            }
        });
    });

    //Przechodzimy po posortowanej mapie i
    //wstawiamy do odszyfrowanego słowa kolejne kolumny macierzy pod zadanym indeksem
    for (let j: number = 0; j < numberOfRows; j++) {
        for (let i: number = 0; i < numberOfColumns; i++) {
            if (matrix[i] !== undefined && matrix[i][j] !== undefined) {
                decryptedText = decryptedText.concat(matrix[i][j]);
            }
        }
    }

    return decryptedText.trim();
};
