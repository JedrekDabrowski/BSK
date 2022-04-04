import React, { useEffect, useState } from 'react';
import { streamCipher } from '../../ciphers/StreamCipher';
import { Button, InputWithLabel, TextAreaWithLabel } from '../../components';
import { RowWrapper, CenterWrapper } from '../../styles/common';
import { text2Binary } from '../../utils';
import { generateLFSRKey } from '../../utils/lfsr';

export const StreamCipher = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [key, setKey] = useState('');

    useEffect(() => {
        const text = 'Kamil to piekny chlopiec';
        const lfsrKey = generateLFSRKey('1-4', text.length * 16);

        streamCipher(text, lfsrKey);
        const a = streamCipher(text, lfsrKey);
        console.log(a);
        const b = streamCipher(a, lfsrKey);
        console.log(b);
    });

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const blob = new Blob([e.target.files[0]]);
            const a = text2Binary(await blob.text());
            const blob2 = new Blob([a]);
            var file = new File([blob2], 'dupa');

            console.log(file);
        }
    };

    return (
        <RowWrapper>
            <TextAreaWithLabel
                label="INPUT"
                value={input}
                onChange={(e) => {
                    const { value } = e.target as HTMLInputElement;
                    setInput(value);
                }}
            />
            <InputWithLabel label="KEY" value={key} type="file" onChange={handleChange} />
            <CenterWrapper>
                <InputWithLabel
                    label="KEY"
                    value={key}
                    onChange={(e) => {
                        const { value } = e.target as HTMLInputElement;
                        setKey(value);
                    }}
                />
                <Button
                    onClick={() => {
                        setInput('');
                        // setOutput(encrypt(input, key));
                    }}
                >
                    UTAJNIJ WIADOMOŚĆ
                </Button>
                <Button
                    onClick={() => {
                        // setInput(decrypt(output, key))
                    }}
                >
                    ZŁAM SZYFR!
                </Button>
            </CenterWrapper>

            <TextAreaWithLabel
                label="OUTPUT"
                value={output}
                onChange={(e) => {
                    const { value } = e.target as HTMLTextAreaElement;
                    setOutput(value);
                }}
                disabled
            />
        </RowWrapper>
    );
};
