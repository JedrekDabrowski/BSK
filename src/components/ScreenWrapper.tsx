import React from 'react';
import styled from 'styled-components';
import { Colors } from '../assets/Colors';

export const ScreenWrapper: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right top, ${Colors.primary}, ${Colors.second});
`;
