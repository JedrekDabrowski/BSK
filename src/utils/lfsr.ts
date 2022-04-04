export const generateLFSRKey = (polynomial: string, length: number) => {
    const key: number[] = polynomial.split('-').map((num) => parseInt(num) - 1);
    const maxPower: number = Math.max(...key) + 1;
    let randomStartSeqeunce: string = '';
    let lfsr: string = '';
    let xor;

    for (let i = 0; i < maxPower; i++) {
        randomStartSeqeunce += Math.random().toFixed();
    }
    randomStartSeqeunce = '01001';
    for (let i = 0; i < length; i++) {
        a: for (let j = 0; j < key.length; j++) {
            if (j + 1 > key.length) break a;

            if (j === 0) {
                xor = parseInt(randomStartSeqeunce[key[j]]) ^ parseInt(randomStartSeqeunce[key[j + 1]]);
            } else if (xor && j > 1) {
                xor = parseInt(randomStartSeqeunce[key[j]]) ^ xor;
            }
        }
        lfsr = lfsr.concat(randomStartSeqeunce[randomStartSeqeunce.length - 1]);
        randomStartSeqeunce = xor + randomStartSeqeunce.slice(0, randomStartSeqeunce.length - 1);
    }
    return lfsr;
};
