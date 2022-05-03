export const binToText = (binary: string) =>
    binary
        .match(/.{1,8}/g)
        ?.map((el) => String.fromCharCode(parseInt(el, 2)))
        .join('');
