import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/Colors';

export const ScreenWrapper: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to right top, ${colors.primary}, ${colors.second});
`;
