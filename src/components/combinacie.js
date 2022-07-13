import React, { useEffect, useState, } from 'react';
import './style.css';


const Combin= () => {
    const [name, setName] = useState('Miro');
    const [memo, setMemo] = useState('Memo');
    const [myCar, setCar] = useState('Ford');

    const save= (event) => {
        event.preventDefault();
    }

     return(
            <>
                <div className='container'>
                    <form onSubmit={save}>
                        <div className='form_element'>
                            <label>Meno</label>
                            <input 
                                type='text' 
                                value={name}
                                onChange={ (e) => setName(e.target.value)}/>
                        </div>

                        <div className='form_element'>
                            <label>Auto</label>
                            <select value={myCar} onChange={(e) => setCar(e.target.value)}>
                                <option value="Ford">Ford</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Fiat">Fiat</option>
                            </select>   
                        </div>

                        <div className='form_element'>
                            <label>Memo</label>
                            <textarea
                                value={memo}
                                onChange={ (e) => setMemo(e.target.value)} />
                        </div>
                        <button type='submit'>Submit</button>
                        {/* <button onClick={save}>Submit</button> */}
                    </form>
                </div>    
   
            </>
        )

}



export default Combin;