import { useState } from 'react';
import styled from 'styled-components';
import { TextAreaWithLabel, InputWithLabel, Button } from '../../components';
import { decrypt, encrypt } from '../../ciphers/CaesarCipher';

export const Cezar: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [key, setKey] = useState<number>(1);

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
                    type="number"
                    value={key}
                    onChange={(e) => {
                        const { value } = e.target as HTMLInputElement;
                        if (value !== '') {
                            setKey(parseInt(value));
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

const RowWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
