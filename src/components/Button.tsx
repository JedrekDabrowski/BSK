import styled from 'styled-components';
import { colors } from '../assets/Colors';

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = (props: any) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
    border-radius: 8px;
    padding: 0.4rem;
    color: ${colors.text};
    cursor: pointer;
    transition: 0.5s;
    margin: 1.5rem;
    &:hover {
        background-color: transparent;
    }
`;
