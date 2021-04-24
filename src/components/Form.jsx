import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getAnnualDifference, calculateBrand, getPlan } from '../helper';
import PropTypes from 'prop-types';


const Field = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items:center;
`;

const Label = styled.div`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display:block;
    width:100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const Input = styled.input`
    margin: 0 1rem;
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Botton = styled.button`
    background-color:#00838f;
    font-size: 16px;
    width:100%;
    padding:1rem;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3 ease;

    &:hover{
        background-color:#3CB994;
        cursor:pointer;
    }
`;

const Form = ({ setResume, setLoad }) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: 'basíco',
    });

    const [error, setError] = useState(false);

    // extraer valores del state
    const { marca, year, plan } = data;

    //leer valores:
    const getData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // cuando el usuario presiona submit
    const handleSubmit = e => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        //base 2000
        let result = 2000;

        // obtener la diferencia de años
        const difference = getAnnualDifference(year);

        //por cada año restar el 3%

        result -= ((difference * 3) * result) / 100;

        //Americano 15%
        //Asiatico 5%
        //Europeo 30%
        result = calculateBrand(marca) * result

        //Basico = 20%
        //Completo = 50%
        const costPlan = getPlan(plan);
        result = parseFloat(costPlan * result).toFixed(2);
        //Total

        //cargando
        setLoad(true);

        setTimeout(() => {
            //cargando
            setLoad(false);

            setResume({
                cotization: Number(result),
                data
            });
        }, 3000);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={getData}
                >
                    <option value="">Selecione</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getData}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Input
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={getData}
                /> Basíco
                <Input
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={getData}
                /> Completo
            </Field>
            <Botton type="submit">
                Cotizar
            </Botton>
        </form>
    );
}

Form.propType = {
    setLoad: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired
}

export default Form;