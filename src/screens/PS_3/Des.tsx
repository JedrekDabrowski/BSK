import { useState } from 'react';
import { encrypt, decrypt } from '../../ciphers/DES/DES';
import { Button, InputWithLabel, TextAreaWithLabel } from '../../components';
import { RowWrapper, CenterWrapper } from '../../styles/common';

export const Des = () => {
    const [input, setInput] = useState('');
    const [key, setKey] = useState('');
    const [output, setOutput] = useState('');

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
            <CenterWrapper>
                <InputWithLabel
                    type="text"
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
                        setOutput(encrypt(input, key));
                    }}
                >
                    UTAJNIJ WIADOMOŚĆ
                </Button>
                <Button onClick={() => setInput(decrypt(output, key))}>ZŁAM SZYFR!</Button>
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
