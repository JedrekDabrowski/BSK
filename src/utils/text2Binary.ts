export const text2Binary = (text: string) => {
    return text
        .split('')
        .map((char) => char.charCodeAt(0).toString(2).padStart(16, '0'))
        .join('');
};
