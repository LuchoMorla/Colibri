import React from 'react';

const Deudor = ({ dice }) => {
    console.log('Deudor: ', dice);
    console.log('Deudor: ', dice.length);
    return (
        <>
            <p>{dice}</p>
        </>
    )
};

export default Deudor;