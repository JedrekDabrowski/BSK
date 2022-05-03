export const hexToBin = (hex: string) => {
    let bytes = [];
    for (let i = 0; i < hex.length - 1; i += 2) {
        bytes.push(parseInt(hex.substring(i, i + 2), 16));
    }
    return bytes.map((byte) => byte.toString(2).padStart(8, '0'));
};
