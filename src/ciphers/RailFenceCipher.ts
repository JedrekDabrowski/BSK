const UP: string = 'UP';
const DOWN: string = 'DOWN';
const DEFAULT_TEXT_FOR_ENCRYPTION: string = 'KAMILSLIMAK';
const DEFAULT_TEXT_FOR_DECRYPTION: string = 'KLMAISIAMLK';
const DEFAULT_KEY: number = 3;

export const encrypt = (text: string = DEFAULT_TEXT_FOR_ENCRYPTION, key: number = DEFAULT_KEY): string => {
    /* matrix initialization
     *  rows: key
     *  columns: text.length
     */
    let matrix = new Array(key).fill('*').map(() => new Array(text.length).fill('*'));

    let direction: string = UP;
    let column: number = 0;
    let row: number = 0;
    let encryptedText: string = '';

    /*
     * direction change depends
     * on whether we reached top/bottom
     * of the matrix
     */
    for (let i: number = 0; i < text.length; i++) {
        if (row === 0 || row === key - 1) {
            if (direction === UP) direction = DOWN;
            else direction = UP;
        }

        matrix[row][column++] = text[i];

        if (direction === DOWN) row++;
        else row--;
    }

    /*
     * reading encrypted text
     */

    for (let i: number = 0; i < key; i++) {
        for (let j: number = 0; j < text.length; j++) {
            if (matrix[i][j] !== '*') encryptedText = encryptedText.concat(matrix[i][j]);
        }
    }

    return encryptedText;
};

export const decrypt = (cipher: string = DEFAULT_TEXT_FOR_DECRYPTION, key: number = DEFAULT_KEY): string => {
    /* matrix initialization
     *  rows: key
     *  columns: cipher.length
     */
    let matrix = new Array(key).fill('*').map(() => new Array(cipher.length).fill('*'));

    let direction: string = UP;
    let column: number = 0;
    let row: number = 0;
    let indexLetterInCipher: number = 0;
    let decryptedText: string = '';

    /*
     * inserts markers in matrix
     */

    for (let i: number = 0; i < cipher.length; i++) {
        /*
         * direction change depends
         * on whether we reached top/bottom
         * of the matrix
         */
        if (row === 0) direction = DOWN;
        else if (row === key - 1) direction = UP;

        /*
         *  inserts marker
         */
        matrix[row][column++] = '#';

        if (direction === DOWN) row++;
        else row--;
    }

    /*
     * inserts letters of cipher where markers are set
     */
    for (let i: number = 0; i < key; i++)
        for (let j: number = 0; j < cipher.length; j++)
            if (matrix[i][j] === '#' && indexLetterInCipher < cipher.length)
                matrix[i][j] = cipher[indexLetterInCipher++];

    row = 0;
    column = 0;

    /*
     * reading decrypted cipher
     */
    for (let i: number = 0; i < cipher.length; i++) {
        if (row === 0) direction = DOWN;
        else if (row === key - 1) direction = UP;

        if (matrix[row][column] !== '*') decryptedText = decryptedText.concat(matrix[row][column++]);

        if (direction === DOWN) row++;
        else row--;
    }

    return decryptedText;
};
