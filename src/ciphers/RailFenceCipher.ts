const UP: string = 'UP';
const DOWN: string = 'DOWN';

export const encrypt = (text: string = 'DEFAULT', key: number = 3): string => {
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

    for (let i: number = 0; i < key; i++) {
        for (let j: number = 0; j < text.length; j++) {
            if (matrix[i][j] !== '*') encryptedText = encryptedText.concat(matrix[i][j]);
        }
    }

    return encryptedText;
};

export const decrypt = (cipher: string, key: number): string => {
    return 'null';
};
