import { generateKeys } from './GenerateKeys';
import { permutation } from './Permutation';
import { binToText, textToBinDES } from '../../utils';
import { IP, IP1 } from '../../const/DesConst';
import { round } from './Round';

export const encrypt = (text: string, key: string): string => {
    let output = '';
    const keys: string[] = generateKeys(key);

    let textBin: string = textToBinDES(text, 16);
    const blocks = textBin.match(/.{1,64}/g);
    blocks &&
        blocks.forEach((block) => {
            block = permutation(IP, block);

            for (let i: number = 0; i < 16; i++) {
                block = round(block, keys[i]);
            }
            block = block.substring(32, 64) + block.substring(0, 32);
            block = permutation(IP1, block);
            output = output.concat(block);
        });
    // @ts-ignore
    return binToText(output);
};
export const decrypt = (text: string, key: string): string => {
    let output = '';
    const keys: string[] = generateKeys(key);
    let textBin: string = textToBinDES(text, 16);
    const blocks = textBin.match(/.{1,64}/g);
    blocks &&
        blocks.forEach((block) => {
            block = permutation(IP, block);

            for (let i: number = 15; i > -1; i--) {
                block = round(block, keys[i]);
            }

            block = block.substring(32, 64) + block.substring(0, 32);

            block = permutation(IP1, block);
            output = output.concat(block);
        });
    // @ts-ignore
    return binToText(output);
};
