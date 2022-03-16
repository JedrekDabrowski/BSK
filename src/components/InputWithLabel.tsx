import styled from 'styled-components';
import { colors } from '../assets/Colors';

interface InputWithLabelI extends React.HTMLProps<HTMLInputElement> {
    label: string;
}

export const InputWithLabel: React.FC<InputWithLabelI> = ({ label, ...props }: any) => {
    return (
        <InputWrapper>
            <InputLabel>{label}</InputLabel>
            <StyledInput {...props} />
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
const StyledInput = styled.input`
    width: 200px;
    padding: 4px 8px;
    border-radius: 8px;
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    background-color: ${colors.background};
    outline: none;
`;
const InputLabel = styled.p`
    color: ${({ theme }) => theme.fontColor};
    font-family: Roboto-Regular, Arial, Helvetica, sans-serif;
    text-transform: capitalize;
    padding: 0.5rem;
    text-align: center;
    width: 40%;
    font-weight: 700;
`;
