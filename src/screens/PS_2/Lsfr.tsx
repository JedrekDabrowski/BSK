import { useState } from 'react';
import { TextAreaWithLabel, InputWithLabel, Button } from '../../components';
import { CenterWrapper, RowWrapper } from '../../styles/common';
import { generateLSFRKey } from '../../utils';

export const Lsfr: React.FC = () => {
    const [lenght, setLength] = useState(0);
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
                <InputWithLabel
                    type="number"
                    label="LENGTH"
                    value={lenght}
                    onChange={(e) => {
                        const { value } = e.target as HTMLInputElement;
                        setLength(parseInt(value));
                    }}
                />
                <Button onClick={() => setOutput(generateLSFRKey(key, lenght))}>GENERUJ KLUCZ!</Button>
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
