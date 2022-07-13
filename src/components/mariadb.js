import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import './style.css';
const mystyle = {
    display: 'grid',
    gridTemplateColumns: '70px 400px 300px 50px',
    gridGap: '10px',
}






const MariaDB = () => {
    const [ucet, setUcet] = useState('');
    const [popis, setPopis] = useState('');

    // const {data, loading, error} = useFetch("http://localhost:4010/ucet");
    const data = useFetch("http://localhost:4010/ucet");
    // if (loading) return <h1> LOADING ...</h1>
    // if (error) console.log('Chyba',error);


    return (
        <>
            <div className='container'>
                <form>
                    <div className='form_element'>
                        <label>Účet</label>
                        <input
                            type='text'
                            value={ucet}
                            onChange={(e) => setUcet(e.target.value)} />
                    </div>

                    <div className='form_element'>
                        <label>Popis</label>
                        <input
                            type='text'
                            value={popis}
                            onChange={(e) => setPopis(e.target.value)} />
                    </div>

                </form>
            </div>
            {/* <button onclick={reFetch()}> Refetch </button> */}
            {<VypisDB ucetList={data}/>}
        </>
    )

}
const useFetch = (url) => {
    const [rows, setRows] = useState(null);
    const [zmena, setZmena] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setZmena(true);
        axios
            .get(url)
            .then((response) => {
                setRows(response.data);   
            })
            .catch ((err) => {
                setError(err)
            })
            .finally(() => {
                setZmena(false);
            })
    }, [url]);

    // const reFetch = (url) => {
    //         setZmena(true);
    //         axios
    //             .get(url)
    //             .then((response) => {
    //                 setRows(response.data);   
    //             })
    //             .catch ((err) => {
    //                 setError(err)
    //             })
    //             .finally(() => {
    //                 setZmena(false);
    //             });
    // };

  //  return {rows, zmena, error , reFetch};
    return ({rows} );
}


const VypisDB = (ucetList) => {
    if (ucetList !== undefined && ucetList.ucetList.rows!==null) {
        return (      
            <>
            <div style={{textAlign:'center'}}> Vypis učtov </div>
            <hr />
            <div style={mystyle}>
                <span>Účet</span>
                <span>Popis</span>
                <span>Typ</span>
            </div>
            <hr />
                <div >
                    {ucetList.ucetList.rows.data.map((ucet,i) => {
                        return (
                                <div  style={mystyle} key={i}> 
                                    <span > {ucet.ucet} </span>
                                    <span > {ucet.Popis} </span>
                                    <span > {ucet.Typ} </span>
                                    <button id={i} onClick={() => editLine(ucet.ID)} style={{height:'8px', fontSize:'10px', paddingTop:'2px'}}> edit </button>
                                </div>
                        )
                    })} 
            </div>
            </>
       )
    }

        
}


const editLine = (i) => {
    console.log(i)
}



export default MariaDB;