export const generateLFSRKey = (polynomial: string, length: number) => {
    const key: number[] = polynomial.split('-').map((num) => parseInt(num));
    const maxPower: number = Math.max(...key);
    let randomStartSeqeunce: string = '';
    let lfsr: string = '';
    let xor: number = 0;

    for (let i = 0; i < maxPower; i++) {
        randomStartSeqeunce += Math.random().toFixed();
    }
    console.log(randomStartSeqeunce);
    for (let i = 0; i < length; i++) {
        if (i <= 2 ** maxPower - 1) {
            a: for (let j = 0; j < key.length; j++) {
                if (j === 0) {
                    xor = parseInt(randomStartSeqeunce[key[j] - 1]) ^ parseInt(randomStartSeqeunce[key[j + 1] - 1]);
                } else if (j >= 1) {
                    xor = parseInt(randomStartSeqeunce[key[j] - 1]) ^ xor;
                }
            }
            lfsr = lfsr.concat(randomStartSeqeunce[randomStartSeqeunce.length - 1]);
            randomStartSeqeunce = xor + randomStartSeqeunce.slice(0, randomStartSeqeunce.length - 1);
            console.log('LFSR', lfsr);
            console.log('randomStartSeqeunce', randomStartSeqeunce);
            console.log('xor', xor);
        } else {
            lfsr = lfsr.concat(lfsr);
        }
    }
    return lfsr;
};
