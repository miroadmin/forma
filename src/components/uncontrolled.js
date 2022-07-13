import React, { useEffect, useState, } from 'react';
import './style.css';

const Unontrolled = () => {

    let name1='';
    let last1='';
    let obec1='';

    const save= (event) => {
        event.preventDefault();
        const values = {
            last: last1.value,
            name: name1.value,
            obec: obec1.value,
        }
        console.log(values.name + ' ' +values.last+ ' '+values.obec)
    }


     return(
            <>
                <div className='container'>
                    <form>
                        <div className='form_element'>
                            <label> Enter name</label>
                            <input 
                                type='text'                    
                                ref={input => name1 = input}/>
                        </div>

                        <div className='form_element'>
                            <label> Enter last name</label>
                            <input 
                                type='text'                 
                                ref={input => last1 = input} />
                        </div>

                        
                        <div className='form_element'>
                            <label> Obec</label>
                            <input 
                                type='text'                 
                                ref={input => obec1 = input} />
                        </div>
                        <button onClick={save}>Submit</button>
                    </form>
                </div>    
   
            </>
        )

}


export default Unontrolled;