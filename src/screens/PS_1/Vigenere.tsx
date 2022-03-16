import { useState } from 'react';
import styled from 'styled-components';
import { TextAreaWithLabel, InputWithLabel, Button } from '../../components';

export const Vigenere: React.FC = () => {
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
                        setKey(value);
                    }}
                />
                <Button value="a" onClick={() => setOutput(input + key)}>
                    LETS GO
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
