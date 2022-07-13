import React, { useEffect, useState, } from 'react';
import './style.css';
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Vypis from './vypis.js';



const Controlled = () => {
    const [name, setName] = useState('');
    const [last, setLast] = useState('Siran');
    const [flag, setFlag] = useState(0);
    const [zmena, setZmena] = useState(1);

    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "users");

    const createUser = async () => {
        if (name !== '' && last !== '') {
            await addDoc(userCollectionRef, { Priezvisko: name, meno: last })
        }
        setName('');
        setLast('');
        setZmena(1);
        setFlag(flag + 1);
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, [flag]);


    const save = (event) => {
        event.preventDefault();
        createUser();

    }

    return (
        <>
            <div className='container'>
                <form onSubmit={save}>
                    <div className='form_element'>
                        <label> Enter name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='form_element'>
                        <label> Enter last name</label>
                        <input
                            type='text'
                            value={last}
                            onChange={(e) => setLast(e.target.value)} />
                    </div>
                    <button type='submit'>Submit</button>

                </form>
            </div>
            <Vypis users={users} />
            {/* {lenVypis(users)} */}



        </>
    )

}


export default Controlled;