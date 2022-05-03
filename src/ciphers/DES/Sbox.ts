import { SBox } from '../../const/DesConst';
import { textToBin } from '../../utils';

export const sBox = (input: string) => {
    let output = '';
    const binaryString = textToBin(input, 8);

    for (let i = 0; i < 48; i += 6) {
        const temp = binaryString.substring(i, i + 6);
        const num = i / 6;
        const row = parseInt(temp.charAt(0) + '' + temp.charAt(5), 2);
        const col = parseInt(temp.substring(1, 5), 2);
        output += parseInt(SBox[num][row][col].toString());
    }

    return output;
};
