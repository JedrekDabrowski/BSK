const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwyxz';

/**
 * Szyfruje tekst metodą przestawienia macierzowego.
 * @param text Tekst do zaszyfrowania.
 * @param key Klucz tekstowy.
 * @returns Zaszyfrowany tekst.
 */
export const encrypt = (text: string, key: string) => {
    let encryptedText: string[] = [];

    const input: (number | string)[] = key.split('');
    let x = 1;

    for (const letter of ALPHABET) {
        input.forEach((character, idx) => {
            if (character === letter) input[idx] = x++;
        });
        if (x > input.length) break;
    }

    //Budujemy macierz
    const matrix: string[][] = [];
    let allUnits = 0,
        currentValue = 1;
    while (allUnits < text.length) {
        //Obliczamy ile komórek ma być w danym wierszu
        let newUnitMatrix = input.indexOf(currentValue++) + 1;
        allUnits += newUnitMatrix;
        if (currentValue > input.length) currentValue = 1;
        //Wyrzucamy nadmiarowe komórki
        if (allUnits > text.length) newUnitMatrix -= allUnits - text.length;
        //Tworzymy wiersz z odpowiednią liczbą komórek
        matrix.push(new Array(newUnitMatrix).fill(undefined));
    }

    //Wpisujemy teksty do utworzonej macierzy
    let charIdx = 0;
    loop: for (const i in matrix)
        for (const j in matrix[i]) {
            matrix[i][j] = text[charIdx++];
            if (charIdx >= text.length) break loop;
        }

    //Odczytujemy zaszyfrowany tekst
    for (let n = 1; n <= input.length; n++) {
        matrix.forEach((row) => encryptedText.push(row[input.indexOf(n)]));
    }

    return encryptedText.join('');
};

/**
 * Odszyfrowuje tekst zaszyfrowany metodą przestawienia macierzowego.
 * @param text Zaszyfrowany tekst.
 * @param key Klucz tekstowy użyty do zaszyfrowania tekstu.
 * @returns Odszyfrowany tekst.
 */
export const decrypt = (text: string, key: string) => {
    let decryptedText = '';

    const output: (number | string)[] = key.split('');
    let x = 1; //zmienna do numerowania kolumn

    for (const letter of ALPHABET) {
        output.forEach((character, idx) => {
            if (character === letter) output[idx] = x++;
        });
        if (x > output.length) break;
    }
    //Budujemy macierz
    const matrix: string[][] = [];
    let totalCells = 0,
        currentValue = 1;
    while (totalCells < text.length) {
        //Obliczamy ile komórek ma być w danym wierszu
        let newUnitMatrix = output.indexOf(currentValue++) + 1;
        totalCells += newUnitMatrix;
        if (currentValue > output.length) currentValue = 1;
        //Wyrzucamy nadmiarowe komórki
        if (totalCells > text.length) newUnitMatrix -= totalCells - text.length;
        //Tworzymy wiersz z odpowiednią liczbą komórek
        matrix.push(new Array(newUnitMatrix).fill(undefined));
    }

    //wpisanie tekstu kolumnami według klucza
    let letterIndex = 0;
    for (let n = 1; n <= output.length; n++)
        matrix.forEach((row) => {
            const indexToWrite = output.indexOf(n);
            if (indexToWrite < row.length) row[indexToWrite] = text[letterIndex++];
        });
    //odczytanie tekstu wierszami
    matrix.forEach((j) => j.forEach((i) => (decryptedText = decryptedText.concat(i))));
    return decryptedText;
};
