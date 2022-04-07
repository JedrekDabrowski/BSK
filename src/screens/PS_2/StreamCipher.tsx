import { useState } from 'react';
import { streamCipher } from '../../ciphers/StreamCipher';
import { Button, InputWithLabel, TextAreaWithLabel } from '../../components';
import { RowWrapper, CenterWrapper } from '../../styles/common';
import { generateLSFRKey } from '../../utils/lsfr';

export const StreamCipher = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [polynomial, setPolynomial] = useState('');
    const [lfsr, setLfsr] = useState('');
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
                    label="POLYNOMIAL"
                    value={polynomial}
                    onChange={(e) => {
                        const { value } = e.target as HTMLInputElement;
                        setPolynomial(value);
                    }}
                />
                <Button
                    onClick={() => {
                        setInput('');
                        const generatedLfsr = generateLSFRKey(polynomial, input.length * 16);
                        setLfsr(generatedLfsr);
                        setOutput(streamCipher(input, generatedLfsr));
                    }}
                >
                    UTAJNIJ WIADOMOŚĆ
                </Button>
                <Button
                    onClick={() => {
                        setInput(streamCipher(output, lfsr));
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
