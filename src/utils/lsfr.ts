/**
 * Generuje LFSR na podstawie podanego wielomianu o podanej długości.
 * @param polynomial Wielomian na podstawie, którego będą podawane odpowienie bity operacji xor.
 * @param length Określamy długość LFSR.
 * @returns LFSR o podanej długości na podstawie podanego wielomianu.
 */
export const generateLSFRKey = (polynomial: string, length: number) => {
    // dzielimy podany wielomian
    const key: number[] = polynomial.split('-').map((num) => parseInt(num));
    // znajdujemy stopień wielomianu (największą potęgę)
    const maxPower: number = Math.max(...key);
    let randomStartSeqeunce: string = '';
    let lfsr: string = '';
    let xor: number = 0;
    //generujemy losową sekwencje startową o długości równej maxPower
    for (let i = 0; i < maxPower; i++) {
        randomStartSeqeunce += Math.random().toFixed();
    }

    outloop: for (let i = 0; i < length; i++) {
        // Generujemy LFSR aż do momentu gdy długość równa się 2^maxPower - 1,
        // następnie ciąg się powtarza
        if (i < 2 ** maxPower - 1) {
            a: for (let j = 0; j < key.length; j++) {
                if (j === 0) {
                    // podajemy operacji XOR odpowiednie bity określone na podstawie podanego wielomianu
                    xor = parseInt(randomStartSeqeunce[key[j] - 1]) ^ parseInt(randomStartSeqeunce[key[j + 1] - 1]);
                } else if (j >= 1) {
                    xor = parseInt(randomStartSeqeunce[key[j] - 1]) ^ xor;
                }
            }
            lfsr = lfsr.concat(randomStartSeqeunce[randomStartSeqeunce.length - 1]);
            randomStartSeqeunce = xor + randomStartSeqeunce.slice(0, randomStartSeqeunce.length - 1);
        } else {
            // Dodajemy wcześniej wygnerowany ciąg
            lfsr = lfsr.concat(lfsr);
        }
        // Gdy otrzymamy wymaganą długość, wychodzimy z pętli
        if (lfsr.length >= length) break outloop;
    }

    return lfsr.slice(0, length);
};
