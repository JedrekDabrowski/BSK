import { SBox } from '../../const/DesConst';

/**
 * Operacja S na danych wejściowych
 * @param input wartość tekstowa w postaci ciągu binarnego
 * @returns Dane wejściowe po operacji S
 **/
export const sBox = (input: string) => {
    let output: string = '';

    for (let i = 0; i < 48; i += 6) {
        const temp = input.substring(i, i + 6);
        const num = i / 6;
        const row = parseInt(temp.charAt(0) + '' + temp.charAt(5), 2);

        const col = parseInt(temp.substring(1, 5), 2);
        output = output.concat(SBox[num][row][col].toString(2));
    }
    return output;
};
