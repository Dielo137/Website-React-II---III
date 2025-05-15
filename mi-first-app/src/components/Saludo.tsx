import React from 'react';
import EstructuraSaludo from '../interfaces/EstructuraSaludo'
import { Alert } from 'react-bootstrap';

const Saludo: React.FC<EstructuraSaludo> = ({mensaje,tipo}) => {
    return(
        <Alert variant={tipo} key={tipo}>Hola, {mensaje}</Alert>
    )
}
export default Saludo;
