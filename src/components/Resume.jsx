import React from 'react';
import styled from '@emotion/styled';
import { fristMayus } from '../helper';
import PropTypes from 'prop-types';

const ContentResume = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top:1rem;
`;

const Resume = ({ data }) => {

    const { marca, year, plan } = data;

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContentResume>
            <h2> Resumen de cotización </h2>
            <ul>
                <li> Marca: {fristMayus(marca)} </li>
                <li> Año: {year}</li>
                <li> Plan: {fristMayus(plan)}</li>
            </ul>
        </ContentResume>
    );
}

Resume.propType = {
    title: PropTypes.object.isRequired,
}

export default Resume;