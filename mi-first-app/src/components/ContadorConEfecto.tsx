import React, { useState, useEffect } from 'react';
function ContadorConEfecto() {
    const [cuenta, setCuenta] = useState(0);
    useEffect(() => {
        document.title = `Cuenta: ${cuenta}`;
    }, [cuenta]);
    return (
        <div>
            <p>Cuenta: {cuenta}</p>
            <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
        </div>
    );
}
export default ContadorConEfecto;