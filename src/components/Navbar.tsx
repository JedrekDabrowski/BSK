import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../assets/Colors';

const ciphers = ['Rail Fence', 'Matrix A', 'Matrix B', 'Cezar', 'Vigenere'];

export const Navbar = () => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState('Rail Fence');

    useEffect(() => {
        navigate(menuOpen.replace(' ', '_').toLowerCase());
    }, [menuOpen]);

    return (
        <StyledSelect name="cipher" id="cipher" onChange={(e) => setMenuOpen(e.target.value)}>
            {ciphers.map((cipher) => (
                <StyledOption key={cipher} value={cipher}>
                    {cipher}
                </StyledOption>
            ))}
        </StyledSelect>
    );
};

const StyledSelect = styled.select`
    width: 20%;
    height: 40px;
    background-color: ${colors.background};
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    text-transform: uppercase;
    text-align: center;
    outline: none;
`;

const StyledOption = styled.option`
    box-shadow: 0 0 10px 100px #1882a8 inset;
`;
