import { useState } from 'react'
import './AppProfe.css'
import { Button } from 'react-bootstrap'
import Saludo from './components/Saludo'
import ContadorConEfecto from './components/ContadorConEfecto';

function AppProfe() {
  const [tipoMensaje, setTipoMensaje] = useState<'danger'|'success'|'info'>('info');


  return (
    <>
      <Saludo mensaje="Hola soy el saludo reactivo" tipo={tipoMensaje}></Saludo>

      <Button
        variant='success'
        onClick={() => setTipoMensaje('success')}
      >
        Success
      </Button>&nbsp;&nbsp;
      <Button
        variant='danger'
        onClick={() => setTipoMensaje('danger')}
      >
        Danger
      </Button> 
    <br /><br />
      <div className='alert alert-info m5'>
        <ContadorConEfecto></ContadorConEfecto>
      </div>
    </>
  );
}

export default AppProfe
