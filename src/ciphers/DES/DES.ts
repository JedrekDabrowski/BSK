import {generateKeys} from "./GenerateKeys";
import {permutation} from "./Permutation";
import {binToText, textToBin} from "../../utils";
import {IP, IP1} from "../../const/DesConst";
import {round} from "./Round";

export const encrypt = (text: string, key: string): string => {
    const keys: string[] = generateKeys(key);

    let textBin: string = textToBin(text, 16);
    textBin = permutation(IP, textBin);

    for (let i: number = 0; i < 16; i++) {
        textBin = round(textBin, keys[i]);
    }

    textBin = textBin.substring(32, 64) + textBin.substring(0, 32);

    textBin = permutation(IP1, textBin);

    return binToText(textBin);
}

export const decrypt = (text: string, key: string): string => {
    const keys: string[] = generateKeys(key);

    let textBin: string = textToBin(text, 16);
    textBin = permutation(IP, textBin);

    for (let i: number = 15; i > -1; i--) {
        textBin = round(textBin, keys[i]);
    }

    textBin = textBin.substring(32, 64) + textBin.substring(0, 32);

    textBin = permutation(IP1, textBin);

    return binToText(textBin);
}
