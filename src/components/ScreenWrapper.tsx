import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/Colors';

export const ScreenWrapper: React.FC = ({ children }) => {
    return (
        <>
            <BackgroundVideo autoPlay loop muted>
                <source src={require('../videos/background.mp4')} type="video/mp4" />
            </BackgroundVideo>
            <Wrapper>{children}</Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: transparent;
`;
const BackgroundVideo = styled.video`
    position: absolute;
    opacity: 0.9;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
`;
