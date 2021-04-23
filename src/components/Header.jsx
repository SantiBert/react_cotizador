import React from 'react';
import styled from '@emotion/styled';

const ContentHeader = styled.header`
    background-color:#53FBDD;
    padding: 10px;
    font-weight: bold;
    color:#FFFFFF;
`;

const TextHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family:'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({ title }) => {
    return (
        <ContentHeader>
            <TextHeader>{title}</TextHeader>
        </ContentHeader>
    );
}

export default Header;