import styled from 'styled-components';
import { Colors } from '../assets/Colors';

const menuValues = ['PS1', 'PS2', 'PS3'];

export const Navbar = () => {
    return (
        <Wrapper>
            <Logo />
            <List>
                {menuValues.map((i) => (
                    <MenuElement>{i}</MenuElement>
                ))}
            </List>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Logo = styled.div`
    height: 5vh;
    width: 5vh;
    background-color: black;
`;

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
`;

const MenuElement = styled.li`
    list-style: none;
`;
