export const leftShift = (input: string, numberOfBits: number): string => {
    const partToShift: string = input.substring(0, numberOfBits);
    let shiftedInput: string[] = input.split('');

    for (let i: number = 0; i < numberOfBits; i++) {
        shiftedInput.shift();
    }
    return shiftedInput.join('').concat(partToShift);
};
