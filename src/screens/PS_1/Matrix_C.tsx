import { useState } from 'react';
import { TextAreaWithLabel, InputWithLabel, Button } from '../../components';
import { CenterWrapper, RowWrapper } from '../../styles/common';
import { decrypt, encrypt } from '../../ciphers/MatrixTranspositionC';

export const Matrix_C: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [key, setKey] = useState('');

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
                    label="KEY"
                    value={key}
                    onChange={(e) => {
                        const { value } = e.target as HTMLInputElement;
                        if (value !== '') {
                            setKey(value);
                        }
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
