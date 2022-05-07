export const modifyKey = (keyInBinary: string) => {
    if (keyInBinary.length >= 64) return keyInBinary.substring(0, 64);
    return keyInBinary.padStart(64, '0');
};
