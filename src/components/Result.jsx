import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Transition , CSSTransition } from 'react-transition-group';


const Result = ({cotization}) => {
   
    const Message = styled.p`
        background-color: rgb(127, 224, 237);
        margin-top:2rem;
        padding: 1rem;
        text-align:center;
    `;

    const ResultCotizador = styled.div`
        text-align: center;
        padding: .5rem;
        border: 1px solid #26C6DA;
        background-color: rgb(127, 224, 237);
        margin-top: 1rem;
        position: relative;
    `;

    const TextCotizador = styled.p `
        color:#00838F;
        padding: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        margin:0;
    `;

    return ( 
        (cotization === 0 ) 
        ? <Message>Elije marca, año y tipo de seguro </Message> 
        : (
            <ResultCotizador>
                <Transition
                    component="p"
                    className = "resultado"
                >
                    <CSSTransition
                        classNames ="resultado"
                        key={cotization}
                        timeout={{ enter: 500, exit: 500}}
                    >
                        <TextCotizador>El total es: ${cotization}</TextCotizador>
                    </CSSTransition>
                </Transition>
            </ResultCotizador>
        ) 
     );
}
 
export default Result;