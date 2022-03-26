//Zmienne określające obecny kierunek
const UP: string = 'UP';
const DOWN: string = 'DOWN';

/**
 * Szyfruje tekst szyfrem Rail Fence.
 * @param text Tekst wejściowy do zaszyfrowania.
 * @param key Klucz wejściowy to liczba całkowita, minimalna długość 1,
 *            maksymalna dugość słowa wejściowego - 1.
 * @returns Tekst zaszyfrowany.
 */
export const encrypt = (text: string, key: number): string => {
    //Utworzenie macierzy oraz uzupełnienie jej gwiazdkami
    let matrix = new Array(key).fill('*').map(() => new Array(text.length).fill('*'));

    let direction: string = UP;
    let column: number = 0;
    let row: number = 0;
    let encryptedText: string = '';

    for (let i: number = 0; i < text.length; i++) {
        //Zmienna direction zmienia swoją wartość gdy dojdziemy do góry/dołu matrixa
        if (row === 0 || row === key - 1) {
            if (direction === UP) direction = DOWN;
            else direction = UP;
        }
        //Wstawiamy litery w odpowiednią komórkę matrixa,
        //a następnie zwiększamy indeks kolumny
        matrix[row][column++] = text[i];

        //Gdy zmienna direction jest równa DOWN zwiększamy zmienną row
        //w przeciwnym wypadku zmniejszamy
        if (direction === DOWN) row++;
        else row--;
    }

    //Odczytanie zaszyfrowanego słowa,
    //sprawdzamy czy obecna pozycja jest różna od znaku gwiazdki,
    //jeśli tak to dodajemy literę do zaszyfrowanego tekstu
    for (let i: number = 0; i < key; i++) {
        for (let j: number = 0; j < text.length; j++) {
            if (matrix[i][j] !== '*') encryptedText = encryptedText.concat(matrix[i][j]);
        }
    }

    return encryptedText;
};

export const decrypt = (cipher: string, key: number): string => {
    //Utworzenie macierzy oraz uzupełnienie jej gwiazdkami
    let matrix = new Array(key).fill('*').map(() => new Array(cipher.length).fill('*'));

    let direction: string = UP;
    let column: number = 0;
    let row: number = 0;
    let indexLetterInCipher: number = 0;
    let decryptedText: string = '';

    for (let i: number = 0; i < cipher.length; i++) {
        //Zmienna direction zmienia swoją wartość gdy dojdziemy do góry/dołu matrixa
        if (row === 0) direction = DOWN;
        else if (row === key - 1) direction = UP;

        //Zaznaczenie pozycji na której powinna zostać wstawiona litera
        matrix[row][column++] = '#';

        if (direction === DOWN) row++;
        else row--;
    }

    //Wstawiamy litery na wcześniej zaznaczone pola
    for (let i: number = 0; i < key; i++)
        for (let j: number = 0; j < cipher.length; j++)
            if (matrix[i][j] === '#' && indexLetterInCipher < cipher.length)
                matrix[i][j] = cipher[indexLetterInCipher++];

    row = 0;
    column = 0;

    //Odczytujemy odszyfrowany tekst
    for (let i: number = 0; i < cipher.length; i++) {
        if (row === 0) direction = DOWN;
        else if (row === key - 1) direction = UP;

        //Odczytanie odszyfrowanego słowa,
        //sprawdzamy czy obecna pozycja jest różna od znaku gwiazdki,
        //jeśli tak to dodajemy literę do odszyfrowanego tekstu
        if (matrix[row][column] !== '*') decryptedText = decryptedText.concat(matrix[row][column++]);

        if (direction === DOWN) row++;
        else row--;
    }

    return decryptedText;
};
