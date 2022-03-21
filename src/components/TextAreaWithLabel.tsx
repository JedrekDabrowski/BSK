import styled from 'styled-components';
import { colors } from '../assets/Colors';

interface TextAreaWithLabelI extends React.HTMLProps<HTMLTextAreaElement> {
    label: string;
}

export const TextAreaWithLabel: React.FC<TextAreaWithLabelI> = ({ label, ...props }: any) => {
    return (
        <InputWrapper>
            <InputLabel>{label}</InputLabel>
            <StyledInput {...props} rows={10} cols={80} />
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0.4rem;
`;
const StyledInput = styled.textarea`
    width: 40%;
    padding: 4px 8px;
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    background-color: ${colors.background};
    outline: none;
`;
const InputLabel = styled.p`
    color: ${colors.primary};
    font-family: Roboto-Regular, Arial, Helvetica, sans-serif;
    text-transform: capitalize;
    padding: 0.5rem;
    text-align: center;
    width: 40%;
    font-weight: 700;
`;
