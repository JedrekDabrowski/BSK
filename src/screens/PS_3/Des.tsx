import { useEffect, useState } from 'react';
import { DESCipher } from '../../ciphers/DES/DES';
import { Button, TextAreaWithLabel } from '../../components';
import { RowWrapper, CenterWrapper } from '../../styles/common';

export const Des = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    useEffect(() => {
        DESCipher('KAMILSLIMAK');
    }, []);

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
                <Button
                    onClick={() => {
                        setInput('');
                        setOutput(DESCipher(input));
                    }}
                >
                    UTAJNIJ WIADOMOŚĆ
                </Button>
                <Button onClick={() => setInput(DESCipher(output))}>ZŁAM SZYFR!</Button>
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
