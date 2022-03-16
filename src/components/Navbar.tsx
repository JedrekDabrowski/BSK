import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../assets/Colors';

const menuValues = ['PS1', 'PS2', 'PS3'];
const PS1Values = ['Rail Fence', 'Matrix 1', 'Matrix 2', 'Cezar', 'Vigenere'];
const PS2Values = ['xxxx', 'xxxxx', 'xxxxx', 'xxxxx', 'xxxxx'];
const PS3Values = ['yyyyy', 'yyyyy 1', 'yyyyy 2', 'yyyyy', 'yyyyy'];

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState('');
    const [elementChoosen, setElementChoosen] = useState('');

    return (
        <>
            <Wrapper>
                <List>
                    {menuValues.map((i) => (
                        <MenuElement isActive={i === menuOpen} onClick={() => setMenuOpen(i)}>
                            {i}
                        </MenuElement>
                    ))}
                </List>
            </Wrapper>
            {menuOpen !== '' && (
                <Wrapper2>
                    {menuOpen === 'PS1' &&
                        PS1Values.map((a) => (
                            <Navigate
                                isActive={elementChoosen === a}
                                onClick={() => setElementChoosen(a)}
                                to={`${a.replace(' ', '_').toLowerCase()}`}
                            >
                                {a}
                            </Navigate>
                        ))}
                    {menuOpen === 'PS2' &&
                        PS2Values.map((a) => (
                            <Navigate
                                isActive={elementChoosen === a}
                                onClick={() => setElementChoosen(a)}
                                to={`${a.replace(' ', '_').toLowerCase()}`}
                            >
                                {a}
                            </Navigate>
                        ))}
                    {menuOpen === 'PS3' &&
                        PS3Values.map((a) => (
                            <Navigate
                                isActive={elementChoosen === a}
                                onClick={() => setElementChoosen(a)}
                                to={`${a.replace(' ', '_').toLowerCase()}`}
                            >
                                {a}
                            </Navigate>
                        ))}
                </Wrapper2>
            )}
        </>
    );
};

const Wrapper = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Wrapper2 = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 12vh;
`;

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
`;

const MenuElement = styled.li<{ isActive: boolean }>`
    list-style: none;
    width: 100px;
    text-align: center;
    background-color: ${({ isActive }) => (isActive ? 'transparent' : colors.primary)};
    border: 2px solid ${colors.primary};
    border-radius: 8px;
    padding: 0.4rem 0.8rem;
    color: ${colors.text};
    cursor: pointer;
    transition: 0.5s;
    margin: 1.5rem;
    &:hover {
        background-color: transparent;
    }
`;

const Navigate = styled(Link)<{ isActive: boolean }>`
    text-decoration: none;
    width: 100px;
    text-align: center;
    background-color: ${({ isActive }) => (isActive ? 'transparent' : colors.primary)};
    border: 2px solid ${colors.primary};
    border-radius: 8px;
    padding: 0.4rem 0.8rem;
    color: ${colors.text};
    cursor: pointer;
    transition: 0.5s;
    margin: 1.5rem;
    &:hover {
        background-color: transparent;
    }
`;
