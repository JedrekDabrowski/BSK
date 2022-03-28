const a = '1-4';
export const generateLFSRKey = (polynomial: string = a) => {
    const key = polynomial.split('-').map((a) => parseInt(a));
    const max = Math.max(...key);
    let startSeqeunce = '';
    let lsft = '';
    for (let i = 0; i < max; i++) {
        startSeqeunce += Math.random().toFixed();
    }
    console.log(startSeqeunce);
    let xor;
    for (let i = 0; i < 5; i++) {
        a: for (let j = 0; j < key.length; j++) {
            if (j + 1 >= key.length) break a;

            xor = parseInt(startSeqeunce[key[j]]) ^ parseInt(startSeqeunce[key[j + 1]]);
        }
        startSeqeunce = xor + startSeqeunce.slice(0, startSeqeunce.length - 1);
        console.log(startSeqeunce);
    }
};
generateLFSRKey(a);
