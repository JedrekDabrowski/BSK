import { useState } from 'react';
import { TextAreaWithLabel, InputWithLabel, Button } from '../../components';
import { decrypt, encrypt } from '../../ciphers/Vigenerea';
import { CenterWrapper, RowWrapper } from '../../styles/common';

export const Lsfr: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [key, setKey] = useState('');

    return (
        <RowWrapper>
            <CenterWrapper>
                <InputWithLabel
                    label="POLYNOMIAL"
                    value={key}
                    onChange={(e) => {
                        const { value } = e.target as HTMLInputElement;
                        if (value !== '') {
                            setKey(value);
                        }
                    }}
                />
                <Button onClick={() => setInput(decrypt(output, key))}>GENERUJ KLUCZ!</Button>
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
