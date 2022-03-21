import { useState } from 'react';
import { TextAreaWithLabel, InputWithLabel, Button } from '../../components';
import { decrypt, encrypt } from '../../ciphers/RailFenceCipher';
import { CenterWrapper, RowWrapper } from '../../assets/styles/common';

export const Rail_Fence: React.FC = () => {
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
                    type="number"
                    label="KEY"
                    min={1}
                    max={input.length - 1}
                    value={key}
                    onChange={(e) => {
                        const { value } = e.target as HTMLInputElement;
                        setKey(parseInt(value));
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
