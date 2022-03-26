const NUMBER_OF_ROWS: number = 4;

/**
 * Szyfruje tekst szyfrem macierzowym.
 * @param text Tekst wejściowy do zaszyfrowania.
 * @param key Klucz wejściowy w podstaci np. 3-1-4-2,
 *            ilość podanych cyfr określa ilość kolumn w macierzy
 *            oraz kolejność odczytwywania kolumn.
 *            Należy podawać kolejne liczby całkowite.
 * @returns Tekst zaszyfrowany.
 */
export const encrypt = (text: string, key: string): string => {
    const arrayFromText: string[] = [...text];
    const arrayFromKey = key.split('-');

    let i: number = 0;
    let matrix = [];
    let encryptedText: string = '';
    //Iterujemy po tablicy znaków utworzonej na podstawie tekstu wejściowego
    while (i < arrayFromText.length) {
        //Wycinamy litery ze słowa wejściowego
        const column: string[] = arrayFromText.slice(i, (i += NUMBER_OF_ROWS));
        //Dopełniamy niepełne kolumny
        if (column.length < NUMBER_OF_ROWS) column.push('');
        //Dodajemy kolumnę do matrixa
        matrix.push(column);
    }
    //Przechodzimy po matrixie i wstawiamy do zaszyfrowanego tekstu
    //kolejne kolumny matrixa zgodnie z kolejnością określoną w kluczu
    matrix.forEach((column: string[]) => {
        arrayFromKey.forEach((numberOfColumn) => {
            const value = column[parseInt(numberOfColumn) - 1];
            encryptedText = value !== undefined ? encryptedText.concat(value) : encryptedText.concat(' ');
        });
    });
    return encryptedText;
};

/**
 * Deszyfruje tekst.
 * @param text Tekst wejściowy do zaszyfrowania.
 * @param key Klucz wejściowy w podstaci np. 3-1-4-2,
 *            ilość podanych cyfr określa ilość kolumn w macierzy
 *            oraz kolejność odczytwywania kolumn.
 *            Należy podawać kolejne liczby całkowite.
 * @returns Tekst odszyfrowany.
 */
export const decrypt = (text: string, key: string): string => {
    const arrayFromText: string[] = [...text];
    const arrayFromKey: number[] = key.split('-').map((a) => parseInt(a));

    let i: number = 0;
    let j: number = 0;
    let matrix = [];
    const out: string[][] = [];
    const decryptedText: string[] = [];

    //Iterujemy po tablicy znaków utworzonej na podstawie tekstu wejściowego
    while (i < arrayFromText.length) {
        //Wycinamy litery ze słowa wejściowego oraz dodajemy kolumne do matrixa
        let column: string[] = arrayFromText.slice(i, (i += NUMBER_OF_ROWS));
        matrix.push(column);
    }
    //Przechodzimy po macierzy wejściowej i wstawiamy
    //do macierzy wyjściowe bloki tekstu na podstawie podanego klucza
    matrix.forEach((block) => {
        j = 0;
        let blokOfDecryptedText: string[] = [];
        block.forEach((character: string) => {
            blokOfDecryptedText[arrayFromKey[j] - 1] = character;
            j++;
        });
        out.push([...blokOfDecryptedText]);
    });
    //Przechodzimy po macierzy wyjściowej i odczytujemy kolejne znaki odszyfrowanego słowa
    out.forEach((block) => {
        block.forEach((character: string) => {
            decryptedText.push(character);
        });
    });

    return decryptedText.join('').trimEnd();
};
