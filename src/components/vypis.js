import React from 'react';

const mystyle = {
    display: 'grid',
    gridTemplateColumns: '200px 200px',
    gridGap: '10px',
}

const griditem = {
    
}

const Vypis = (props) => {
    console.log('Vypis')
    return (
        <>
            <div style={{textAlign:'center'}}> Vypis databazy </div>
            <hr />
            <div style={mystyle}>
                <span>Meno</span>
                <span>Priezvisko</span>
            </div>
            <hr />
            {props.users.map((user,i) => {
                return (
                        <div style={mystyle} key={i}> 
                            <span style={griditem}> {user.Priezvisko} </span>
                            <span style={griditem}> {user.meno} </span>
                        </div>
                )
            })}
        </> 
    )
}
 

export default Vypis;