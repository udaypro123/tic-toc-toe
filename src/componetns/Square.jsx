import React, { useState } from 'react'

const Square = ({ value, onSquareClick }) => {

    // const [value,setvalue]=useState(null)

    // function handleclick(){
    //     setvalue('x')
    // }
    return (
        <>
            {/* <button className="square" onClick={handleclick}>{value}</button> */ }
            <button className="square" onClick={ onSquareClick }>
                { value }
            </button>

        </>
    )
}

export default Square;
