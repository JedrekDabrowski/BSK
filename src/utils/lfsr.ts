const TEST_POLYNOMNIAL = '1-4';

export const generateLFSRKey = (polynomial: string = TEST_POLYNOMNIAL) => {
    const key:number[] = polynomial.split('-').map((num) => parseInt(num)-1);
    const maxPower:number = Math.max(...key) + 1;
    let randomStartSeqeunce:string = '';
    let lfsr:string = '';
    let xor;

    for (let i = 0; i < maxPower; i++) {
        randomStartSeqeunce += Math.random().toFixed();
    }
    for (let i = 0; i < 7; i++) {
        a: for (let j = 0; j < key.length; j++) {
            if (j + 1 > key.length) break a;

            if(j===0){
                xor = parseInt(randomStartSeqeunce[key[j]]) ^ parseInt(randomStartSeqeunce[key[j + 1]]);
            } else if(j>1){
                xor = parseInt(randomStartSeqeunce[key[j]]) ^ xor);
            }

        }
        lfsr = lfsr.concat(randomStartSeqeunce[randomStartSeqeunce.length-1]);
        randomStartSeqeunce = xor + randomStartSeqeunce.slice(0, randomStartSeqeunce.length - 1);
    }
};
generateLFSRKey(TEST_POLYNOMNIAL);
