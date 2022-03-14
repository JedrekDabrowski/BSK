import React from 'react';
import styled from 'styled-components';

export const ContentWrapper: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.div`
    height: 90vh;
`;
